import { Server, Model, Factory, RestSerializer, belongsTo, Serializer, JSONAPISerializer,
  hasMany,
  association } from 'miragejs'

import { nanoid } from '@reduxjs/toolkit'

import faker from 'faker'
import { setRandom } from 'txtgen'
import seedrandom from 'seedrandom'

const IdSerializer = Serializer.extend({
  // will always serialize the ids of all relationships for the model or collection in the response
  serializeIds: "always",


});

faker.locale = 'ru'

// Set up a seeded random number generator, so that we get
// a consistent set of users / entries each time the page loads.
// This can be reset by deleting this localStorage value,
// or turned off by setting `useSeededRNG` to false.
const useSeededRNG = true

let rng = seedrandom()

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem('randomTimestampSeed')
  let seedDate

  if (randomSeedString) {
    seedDate = new Date(randomSeedString)
  } else {
    seedDate = new Date()
    randomSeedString = seedDate.toISOString()
    localStorage.setItem('randomTimestampSeed', randomSeedString)
  }

  rng = seedrandom(randomSeedString)
  setRandom(rng)
  faker.seed(seedDate.getTime())
}

new Server({
  routes() {
    this.namespace = 'fakeApi'
    // this.timing = 2000
    this.resource('orders')

    this.delete('/orders/:id', (schema, request) => {
      const { id } = request.params

      const result = schema.orders.find(id)
      if (result) {
        result.destroy()
      }

      return null
    })

    this.post("/order", function (schema, request) {
      const attrs = JSON.parse(request.requestBody)
      return schema.orders.find(attrs.id).update( {
        fio: attrs.fio,
        status: attrs.status
      } )
    })

    this.get('/order/:id', (schema, req) => {
      const order = schema.orders.find(req.params.id)
      console.log(order.orderItems)
      return order
    })
  },
  models: {
    order: Model.extend({
      orderItems: hasMany(),
    }),
    orderItem: Model.extend({
      order: belongsTo(),
    }),
  },
  factories: {
    order: Factory.extend({
      id() {
        return nanoid()
      },
      number() {
        return faker.datatype.number()
      },
      date() {
        return faker.date.between('2019-01-01', '2022-01-01')
      },
      status() {
        return faker.datatype.number({
          min: 1,
          max: 6,
        })
      },
      positions() {
        return faker.datatype.number({
          min: 0,
          max: 10,
        })
      },
      summa() {
        return faker.commerce.price()
      },
      fio() {
        return `${faker.name.lastName()} ${faker.name.firstName()} ${faker.name.middleName()}`
      },
      privilage() {
        return faker.random.arrayElement([
          'Новый',
          'Сильвер',
          'Голд'
        ])
      },
      afterCreate(order, server) {
        server.createList('orderItem', order.positions , { order })
      },
    }),
    orderItem: Factory.extend({
      id() {
        return nanoid()
      },
      article() {
        return faker.datatype.string(2) + '.' + faker.datatype.number()
      },
      name() {
        return faker.commerce.productName()
      },
      price() {
        return faker.commerce.price()
      },
      order: association(),
    }),
  },
  serializers: {
    order: RestSerializer.extend({
      include: ['orderItems'],
      embed: true,
      serializeIds: "always",
    }),
    orderItem: IdSerializer,
  },
  seeds(server) {
    server.createList('order', 200)
  },
})

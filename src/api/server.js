import { Server, Model, Factory, RestSerializer } from 'miragejs'

import { nanoid } from '@reduxjs/toolkit'

import faker from 'faker'
import { setRandom } from 'txtgen'
import seedrandom from 'seedrandom'

const IdSerializer = RestSerializer.extend({
  serializeIds: 'always',
})

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
  },
  models: {
    order: Model,
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
          max: 4,
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
    }),
  },
  serializers: {
    orders: IdSerializer,
  },
  seeds(server) {
    server.createList('order', 200)
  },
})

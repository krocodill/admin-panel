import styles from "./ExtendedFilter.module.css";
import { InputsWithLabel } from "../Inputs/InputsWithLabel";
import { Input } from "../Inputs/Input";
import React from "react";
import { Button } from "../Buttons/Button";

export function ExtendedFilter() {
  return (
    <div className={styles.panel}>
      <div className={styles.firstInput}>
        <InputsWithLabel
          type="date"
          placeholder="dd.mm.dddd"
          labeltext="с"
          caption="Дата оформления"
        />
      </div>
      <div className={styles.secondInput}>
        <Input type="date" placeholder="dd.mm.dddd" labeltext="по" />
      </div>
      <div className={styles.thirdInput}>
        <InputsWithLabel
          type="date"
          placeholder="dd.mm.dddd"
          caption="Статус заказа"
        />
      </div>
      <div className={styles.firstInput}>
        <InputsWithLabel
          type="decimal"
          placeholder="Р"
          labeltext="от"
          caption="Сумма заказа"
        />
      </div>
      <div className={styles.secondInput}>
        <Input type="decimal" placeholder="Р" labeltext="до" />
      </div>
      <div className={styles.buttonApplay}>
        <Button type="transporent" text="Применить" />
      </div>
    </div>
  );
}

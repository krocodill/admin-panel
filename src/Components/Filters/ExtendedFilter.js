import styles from 'Components/Filters/ExtendedFilter.module.css';
import { InputsWithLabel } from 'Components/Inputs/InputsWithLabel';
import { Input } from 'Components/Inputs/Input';
import React from 'react';
import { Button } from 'Components/Buttons/Button';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { filterDateFrom } from 'features/data/dataSlice';

export function ExtendedFilter(props) {
  const dispatch = useDispatch();

  const visiblePanelStyleName = classNames({
    [styles.panel]: props.visible,
    [styles.panelInVisible]: !props.visible,
  });
  return (
    <div className={visiblePanelStyleName}>
      <div className={styles.inputDateFrom}>
        <InputsWithLabel
          type="date"
          placeholder="dd.mm.dddd"
          labeltext="с"
          caption="Дата оформления"
          onChange={(value) => dispatch(filterDateFrom(value))}
        />
      </div>
      <div className={styles.inputDateTo}>
        <Input type="date" placeholder="dd.mm.dddd" labeltext="по" />
      </div>
      <div className={styles.inputStatus}>
        <InputsWithLabel
          type="date"
          placeholder="dd.mm.dddd"
          caption="Статус заказа"
        />
      </div>
      <div className={styles.inputSummaFrom}>
        <InputsWithLabel
          type="decimal"
          placeholder="Р"
          labeltext="от"
          caption="Сумма заказа"
        />
      </div>
      <div className={styles.inputSummaTo}>
        <Input type="decimal" placeholder="Р" labeltext="до" />
      </div>
      <div className={styles.buttonApplay}>
        <Button type="transporent" text="Применить" />
      </div>
    </div>
  );
}

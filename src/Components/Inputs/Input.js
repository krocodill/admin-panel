import styles from 'Components/Inputs/Input.module.css';
import React, { useState } from 'react';
import classNames from 'classnames/bind';

export function Input(props) {
  const [Value, setValue] = useState('');
  const [isCloseButtonVisisble, setisCloseButtonVisisble] = useState(false);
  const [HasError, setHasError] = useState(false);

  function handleReset() {
    setValue('');
    setHasError(false);
    setisCloseButtonVisisble(false);
    if (props.onChange) {
      props.onChange('');
    }
  }

  function handleChange(event) {
    if (props.type === 'date') {
      const hasErrorValidate = !event.target.value.match(/\d{2}\.\d{2}\.\d{4}/);
      setValue(event.target.value);
      const hasErroDate = event.target.value ? hasErrorValidate : false;
      setHasError(hasErroDate);
      if (props.onChange && !hasErroDate) {
        props.onChange(event.target.value);
      }
    } else {
      setValue(event.target.value);
      setHasError(false);
      if (props.onChange) {
        props.onChange(event.target.value);
      }
    }
    setisCloseButtonVisisble(Value !== '');
  }

  const styleInputBorder = classNames({
    [styles.inputPanelError]: HasError,
    [styles.inputPanel]: !HasError,
  });

  const styleCloseButton = classNames({
    [styles.closeButton]: isCloseButtonVisisble,
    [styles.closeButtonInvisible]: !isCloseButtonVisisble,
  });

  return (
    <div className={styleInputBorder}>
      <label className={styles.innerLabel}>{props.labeltext}</label>
      <input
        type="text"
        value={Value}
        className={styles.inputWithIcon}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
      <button
        onClick={handleReset}
        className={styleCloseButton}
        type="reset"
      />
    </div>
  );
}

import styles from "./Input.module.css";
import React, { useState } from "react";
import classNames from "classnames/bind";

export function Input(props) {
  const [Value, setValue] = useState("");
  const [isCloseButtonVisisble, setisCloseButtonVisisble] = useState(false);
  const [HasError, setHasError] = useState(false);

  function handleReset() {
    setValue("");
    setHasError(false);
    setisCloseButtonVisisble(false);
  }

  function handleChange(event) {
    if (props.type === "date") {
      const hasErrorValidate = event.target.value.match(/\d{2}\.\d{2}\.\d{4}/)
        ? false
        : true;
      setValue(event.target.value);
      setHasError(event.target.value ? hasErrorValidate : false);
    } else {
      setValue(event.target.value);
      setHasError(false);
    }
    setisCloseButtonVisisble(Value !== "");
  }

  const cx = classNames.bind(styles);
  const styleInputBorder = cx({
    [styles.inputPanelError]: HasError,
    [styles.inputPanel]: !HasError,
  });

  const styleCloseButton = cx({
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
      <button onClick={handleReset} className={styleCloseButton} type="reset" />
    </div>
  );
}

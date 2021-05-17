import styles from "./SearchInput.module.css";
import React, { useState } from "react";
import classNames from "classnames/bind";

export function SearchInput(props) {
  const [Value, setValue] = useState("");
  const [isCloseButtonVisisble, setisCloseButtonVisisble] = useState(false);

  function handleReset() {
    setValue("");
    setisCloseButtonVisisble(false);
  }

  function handleChange(event) {
    setValue(event.target.value);
    setisCloseButtonVisisble(Value !== "");
  }

  const cx = classNames.bind(styles);
  const styleCloseButton = cx({
    [styles.closeButton]: isCloseButtonVisisble,
    [styles.closeButtonInvisible]: !isCloseButtonVisisble,
  });

  return (
    <div className={styles.searchBar}>
      <span className={styles.searchIcon} />
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

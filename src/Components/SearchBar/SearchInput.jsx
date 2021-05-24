import styles from 'Components/SearchBar/SearchInput.module.css';
import React, { useState } from 'react';
import classNames from 'classnames/bind';

export function SearchInput(props) {
  const [Value, setValue] = useState('');
  const [isCloseButtonVisisble, setisCloseButtonVisisble] = useState(false);

  function handleReset() {
    setValue('');
    setisCloseButtonVisisble(false);
    if (props.onChange) {
      props.onChange('');
    }
  }

  function handleChange(event) {
    setValue(event.target.value);
    setisCloseButtonVisisble(Value !== '');
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  }

  const styleCloseButton = classNames({
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
      <button
        onClick={handleReset}
        className={styleCloseButton}
        type="reset"
      />
    </div>
  );
}

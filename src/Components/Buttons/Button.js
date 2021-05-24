import styles from 'Components/Buttons/Button.module.css';
import React from 'react';
import { Icon } from 'Components/Icons/Icon';
import classNames from 'classnames/bind';

export function Button(props) {
  const isSolid = props.type === 'solid';
  const isBigSize = props.size ? props.size === 'big' : true;
  const isPrimaryTextCollor = props.textColor
    ? props.textColor === 'primary'
    : true;
  const IconButton = props.icon;

  const typeButtonStyleName = classNames({
    [styles.solidButton]: isSolid,
    [styles.transparentButton]: !isSolid,
    [styles.sizeBig]: isBigSize,
    [styles.sizeMedium]: !isBigSize,
  });
  const textButtonStyleNmae = classNames({
    [styles.buttonWhite]: isSolid,
    [styles.buttonPrimary]: !isSolid && isPrimaryTextCollor,
    [styles.buttonSecondary]: !isSolid && !isPrimaryTextCollor,
  });
  const colorButtonIfNotSolid = isPrimaryTextCollor
    ? props.textColor
    : 'secondary';
  const textButtonIconColor = isSolid ? 'white' : colorButtonIfNotSolid;

  return (
    <div className={typeButtonStyleName}>
      <button className={textButtonStyleNmae} onClick={props.onClick}>
        <Icon icon={IconButton} color={textButtonIconColor} />
        {props.children}
      </button>
    </div>
  );
}

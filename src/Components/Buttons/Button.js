import styles from "./Button.module.css";
import React, { useState } from "react";
import { Icon } from "../Icons/Icon";
import classNames from "classnames/bind";

export function Button(props) {
  const [isSolid] = useState(props.type === "solid");
  const [isBigSize] = useState(props.size ? props.size === "big" : true);
  const [isPrimaryTextCollor] = useState(
    props.textColor ? props.textColor === "primary" : true
  );
  const [IconButton] = useState(props.icon);
  const cx = classNames.bind(styles);
  const typeButtonStyleName = cx({
    [styles.solidButton]: isSolid,
    [styles.transparentButton]: !isSolid,
    [styles.sizeBig]: isBigSize,
    [styles.sizeMedium]: !isBigSize,
  });
  const textButtonStyleNmae = cx({
    [styles.buttonWhite]: isSolid,
    [styles.buttonPrimary]: !isSolid && isPrimaryTextCollor,
    [styles.buttonSecondary]: !isSolid && !isPrimaryTextCollor,
  });

  const textButtonIconColor = isSolid
    ? "white"
    : isPrimaryTextCollor
    ? props.textColor
    : "secondary";

  return (
    <div className={typeButtonStyleName}>
      <button className={textButtonStyleNmae}>
        <Icon icon={IconButton} color={textButtonIconColor} />
        {props.children}
      </button>
    </div>
  );
}

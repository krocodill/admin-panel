import styles from "./Icon.module.css";
import React from "react";
import classNames from "classnames/bind";

export function Icon(props) {
  const IconName = "icon" + (props.icon ? props.icon : "None");
  const ColorName = props.color ? props.color : "primary";
  const cx = classNames.bind(styles);

  const styleTypeIcon = cx({
    [IconName]: true,
    [styles.white]: ColorName === "white",
    [styles.primary]: ColorName === "primary",
    [styles.secondary]: ColorName === "secondary",
  });
  return <i className={styleTypeIcon}></i>;
}

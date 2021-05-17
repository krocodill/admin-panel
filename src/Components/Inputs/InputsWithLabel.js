import styles from "./InputsWithLabel.module.css";
import { Input } from "./Input";
import React from "react";

export function InputsWithLabel(props) {
  return (
    <div className={styles.container}>
      <label className={styles.caption}>{props.caption}</label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        labeltext={props.labeltext}
      />
    </div>
  );
}

import styles from "./Button.module.css"
import React from "react";
import { Icon } from "../Icons/Icon"

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            icon: props.icon,
            solid: props.type === "solid" ? true : false,
            textColor: props.textColor ? props.textColor : "primary",
            size: props.size ? props.size : "big"
        };
    }

    render() {
        const typeButtonStyleName = this.state.solid ? styles.solidbutton : styles.transparentbutton;
        const textButtonStyleNmae = this.state.solid ? styles.buttonwhite : this.state.textColor === "primary" ? styles.buttonprimary : styles.buttonsecondary;
        const textButtonIconColor = this.state.solid ? "white" : this.state.textColor === "primary" ? this.state.textColor : "secondary";
        const sizeButtonStyleName = this.state.size === "medium" ? styles.sizemedium : styles.sizebig;
        return(
            <div className={[typeButtonStyleName, sizeButtonStyleName].join(" ")}>
                <button className={textButtonStyleNmae}>
                    <Icon icon={this.state.icon}
                          color={textButtonIconColor}
                    />
                    {this.state.text}
                </button>
            </div>

        );
    }
}

export { Button };
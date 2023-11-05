import React from "react";
import styles from "./styles.module.css";
import ARROW from "../../assets/Arrow.svg";

const Button = (props) => {
    if(props.href)
        return (
            <a type={props.type} className={styles.button} onClick={props.onClick} href={props.href}>
                <span>{props.label}</span>
                <img src={ARROW} alt="arrow" />
            </a>
        );
    else
        return (
            <button type={props.type} className={styles.button} onClick={props.onClick}>
                <span>{props.label}</span>
                <img src={ARROW} alt="arrow" />
            </button>
        );
}

export default Button;
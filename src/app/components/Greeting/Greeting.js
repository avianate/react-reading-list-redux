import React, { Component } from "react";
import styles from "./style.css";
import classes from "join-classnames";
import Button from "../Button";

export default ({
    message = "Welcome, User!",
    onClose,
    className
}) => (
    <div className={classes(styles.greeting, className)}>
        <h2>{message}</h2>
        { onClose && <Button onClick={onClose}>Close</Button> }
    </div>
);
import React, { Component } from "react";
import Greeting from "../../components/Greeting";
import styles from "./style.css";

const ReadingListView = ({greetingMessage, greetingVisible, toggleGreeting, title}) => (
    <div>
        <h1>{title}</h1>
        { 
            greetingVisible && 
            <Greeting message={greetingMessage} 
                        onClose={toggleGreeting} />
        }
    </div>
);

export default ReadingListView;
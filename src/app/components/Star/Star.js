import React, { Component } from 'react';
import styles from './styles.css';

const getClassName = (selected) => {
    let style = styles.star;

    if (selected) {
        style += " " + styles.selected;
    }

    return style;
};

class Star extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onRate(this.props.itemId, this.props.starId + 1);
    }

    render() {
        const styleClassName = getClassName(this.props.selected);

        return (
            <div className={styleClassName} onClick={this.handleClick}></div>
        )
    }
};

export default Star;
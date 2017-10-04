import React, { Component } from 'react';
import styles from './styles.css';
import Grid from "../Grid";

class SimpleForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textValue: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {

        const {onAdd} = this.props;
        onAdd(this.state.textValue);

        this.setState({textValue: ""});
    }

    handleChange(e) {
        this.setState({textValue: e.target.value});
    }

    render() {
        return (
            <Grid className={styles.container} columns="1fr 1fr 1fr" gap="15" >
                <span className={styles.title} >Add book by Title or ISBN: </span>
                <input className={styles.input} type="text" value={this.state.textValue} onChange={this.handleChange} />
                <button className={styles.button} onClick={this.handleSubmit}>Add Book</button>
            </Grid>
        )
    }
}

export default SimpleForm;
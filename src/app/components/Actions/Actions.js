import React, { Component } from 'react';
import styles from './styles.css';

class Actions extends Component {

    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleToggle() {
        this.props.onToggle(this.props.assetId);
    }

    handleDelete() {
        this.props.onRemove(this.props.assetId);
    }

    render() {
        const {isActive, ActiveToggleIcon, InactiveToggleIcon, DeleteIcon, children} = this.props;

        return (
            <div className={styles.iconsContainer} >
                <div className={styles.icons}>
                    {
                        isActive
                            ? <span onClick={this.handleToggle}><ActiveToggleIcon width={15} /></span>
                            : <span onClick={this.handleToggle}><InactiveToggleIcon width={15} /></span>
                    }
                    <span onClick={this.handleDelete}><DeleteIcon width={12} /></span>
                </div>
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Actions;
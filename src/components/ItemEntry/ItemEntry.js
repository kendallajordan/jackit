import React, { Component } from 'react'
import styles from './ItemEntry.module.css';
// List items to be changed in state onValueChange
// Close button onClick will remove item from statelist and container somehow
export default class ItemEntry extends Component {
    render() {
        return (
            <div className={`${styles.container} ${styles.flex} ${styles.row}`}>
                <input size="40" maxlength="50" placeholder="Enter Item"></input>
                <input size="3" maxlength="3" placeholder="Bias %"></input>
                <div className={`${styles.close} ${styles.pageLink}`}>x</div>
            </div>
        )
    }
}

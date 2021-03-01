import React, { Component } from 'react';
import styles from './Instructions.module.css';

export default class Instructions extends Component {
    render() {
        return (
            <div className={`${styles.container} ${styles.flex}`}>
                <div className={styles.header}>
                    INSTRUCTIONS
                </div>
                <div className={`${styles.sectionText} ${styles.flex}`}>
                    <div className={styles.bulletPoints}>
                        <div><span className={styles.bullet}>o</span> Users will create a list of items, with each item given a probability-bias (%).</div>
                        <div><span className={styles.bullet}>o</span> JackIt will then randomly decide an item for the user based on the likelihood of each item.</div>
                        <div><span className={styles.bullet}>o</span> The higher the bias, the higher the chance an item will be chosen.</div>
                    </div>
                    <div className={styles.list}>
                        <div><span className={styles.bullet}>1)</span> Add an item and its bias-rate to the list.</div>
                        <div><span className={styles.bullet}>2)</span> Click the ADD ITEM button to add more items.</div>
                        <div><span className={styles.bullet}>3)</span> Once your list is complete, JACK IT!</div>
                        <div><span className={styles.bullet}>NOTE 1:</span> Bias-rates must be whole numbers and have a min. of 1%. </div>
                        <div><span className={styles.bullet}>NOTE 2:</span> Total bias for all items must equal 100%.</div>
                    </div>
                </div>
            </div>
        )
    }
}

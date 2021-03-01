import React, { Component } from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
    render() {
        return (
            <div className={`${styles.container} ${styles.flex}`}>
                <div className={styles.header}>
                    JACK IT!
                </div>
                <div className={styles.slogan}>
                    Can't decide? How bout Jack It?
                </div>
                <div className={styles.about}>
                    <div><span className={styles.bold}>Jack It!</span> is a Biased Decision-Making Tool.</div>

                    <div>Ever have a list of ideas to choose from, such as places to travel and what to eat, 
                    but can't make your mind up?<br />You're leaning towards one or two choices, 
                    yet want to keep all your options open?</div>

                    <div><span className={styles.bold}>Jack It!</span> is the solution!</div>

                    <div>Simply list your items and how much you want
                    each item, then let <span className={styles.bold}>Jack It!</span> decide for you.</div>
                </div>
            </div>
        )
    }
}

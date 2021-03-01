import React, { Component } from 'react';
import styles from './Footer.module.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className={`${styles.container} ${styles.flex}`}>
                    <div className={`${styles.iconWrap} ${styles.flexBox}`}>
                        <a href="https://www.linkedin.com/in/kendallajordan/" rel="noopener noreferrer" target="_blank">
                            <div className={`${styles.flexItem} ${styles.icon}`}>
                                <LinkedInIcon />
                            </div>
                        </a>
                        <a href="https://www.github.com/kendallajordan/" rel="noopener noreferrer" target="_blank">
                            <div className={`${styles.flexItem} ${styles.icon}`}>
                                <GitHubIcon />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/kidnamedkendall/" rel="noopener noreferrer" target="_blank">
                            <div className={`${styles.flexItem} ${styles.icon}`}>
                                <InstagramIcon />
                            </div>
                        </a>
                    </div>
                    <div className={styles.footnote}>
                        <div>KENDALL JORDAN + ALIX THOI <span className={styles.highlight}>© 2020</span></div>
                    </div>
                </div>
            </footer>
        )
    }
}

import React from 'react';
import packageJson from '../../../package.json';
import styles from './Footer.module.css';

class Footer extends React.PureComponent {
    render() {
        return (
            <div className={styles.footerWrapper}>
                <span>ver. {packageJson.version}</span>
            </div>
        );
    }
}

export default Footer;

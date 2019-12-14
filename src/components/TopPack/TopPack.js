import React from 'react'
import styles from './TopPack.module.css'

const TopPack = (props) => (
    <div className={styles.topPack}>
        <div className={styles.logoWrapper}>
            <img src={'/file/' + props.data.thumb} className={styles.logo} alt="logo"></img>
        </div>
        <div className="topPack-info">
            <b>{props.data.title}</b>
            <a href={"tg://addstickers?set="+props.data.name} className={styles.name}> ({props.data.name})</a>
            <span className={styles.info}>Установлен: {props.data.main.total_installed}</span>
            <span className={styles.info}>Использован: {props.data.main.total_usage}</span>
        </div>
    </div>
)

export default TopPack
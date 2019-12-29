import React, { Component } from 'react'
import Chart from '../Chart/Chart'
import styles from './TopPack.module.css'


export default class TopPack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoWrapper: "inline-block",
            ChartInstalled: "none",
            ChartUsage: "none"
        }
        Object.assign(this.state, props.data)
    }

    mouseOver = (e) => {
        e.target.style.opacity = 0.8
        let trigger = 'ChartInstalled'

        if(e.target.className.includes('used')) {
            trigger = 'ChartUsage'
        }


        this.setState({
            logoWrapper: "none",
            [trigger]: "block"
        })
    }


    mouseOut = (e) => {
        e.target.style.opacity = 1
        this.setState({
            logoWrapper: "inline-block",
            ChartInstalled: "none",
            ChartUsage: "none"
        })
    }

    render() {
        let total_usage = this.state.total.map((i) => {
            return {date: i.date, total_data: i.total_usage}
        })

        let total_installed = this.state.total.map((i) => {
            return {date: i.date, total_data: i.total_installed - i.total_removed}
        })

        return (
            <div className={styles.topPack}>
                <div className={styles.logoWrapper}>
                    <a href={"tg://addstickers?set=" + this.state.name}>
                        <img
                            style={{ display: this.state.logoWrapper }}
                            src={'/file/' + this.state.thumb}
                            className={styles.logo}
                            alt="logo"></img>
                    </a>
                </div>
                <div className={styles.Chart} style={{ display: this.state.ChartInstalled }}>
                    <Chart
                        colors={{
                            bg: 'rgba(83, 135, 204, 0.2)',
                            border: 'rgba(83, 135, 204, 1)'
                            }}
                        total={total_installed}
                        style={{ 'margin-top': '5px' }}
                        name={this.state.name + '_installed'}
                    />
                </div>
                <div className={styles.Chart} style={{ display: this.state.ChartUsage }}>
                    <Chart
                        colors={{
                            bg: 'rgba(62, 137, 128, 0.2)',
                            border: 'rgba(62, 137, 128, 1)'
                            }}
                        total={total_usage}
                        style={{ 'margin-top': '5px' }}
                        name={this.state.name + '_used'}
                    />
                </div>
                <div className="topPack-info">
                    <b>{this.state.title}</b>
                    <span className={styles.name}>({this.state.name})</span>

                    <span
                        className={styles.info + ' installed ' + styles.installed}
                        onMouseOver={this.mouseOver}
                        onMouseOut={this.mouseOut}
                    >Установлен: {this.state.main.total_installed - this.state.main.total_removed}</span>

                    <span
                        className={styles.info + ' used ' + styles.used}
                        onMouseOver={this.mouseOver}
                        onMouseOut={this.mouseOut}
                    >Использован: {this.state.main.total_usage}
                    </span>
                </div>
            </div>
        )
    }
}

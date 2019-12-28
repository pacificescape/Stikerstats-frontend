import React, { Component } from 'react'
import Chart from '../Chart/Chart'
import styles from './TopPack.module.css'


export default class TopPack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoWrapper: "inline-block",
            ChartRef: "none"
        }
        this.logoWrapper = React.createRef()
        this.ChartRef = React.createRef()
        Object.assign(this.state, props.data)
    }

    mouseOver = (e) => {
        e.target.style.opacity = 0.5
        this.setState({
            logoWrapper: "none",
            ChartRef: "block"
        })
    }


    mouseOut = (e) => {
        e.target.style.opacity = 1
        this.setState({
            logoWrapper: "inline-block",
            ChartRef: "none"
        })
    }

    render() {
        return (
            <div className={styles.topPack}>
                <div className={styles.logoWrapper}>
                    <a href={"tg://addstickers?set=" + this.state.name}>
                        <img
                            style={{display: this.state.logoWrapper}}
                            src={'/file/' + this.state.thumb}
                            className={styles.logo}
                            alt="logo"></img>
                    </a>
                </div>
                <div className={styles.Chart} style={{display: this.state.ChartRef}}>
                    <Chart data={this.state} style={{ 'margin-top': '5px' }} />
                </div>
                <div className="topPack-info">
                    <b>{this.state.title}</b>
                    <span className={styles.name}> ({this.state.name})</span>
                    <span className={styles.info}
                        onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                    >Установлен: {this.state.main.total_installed}</span>
                    <span className={styles.info}
                        onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}
                    >Использован: {this.state.main.total_usage}</span>
                </div>
            </div>)
    }
}

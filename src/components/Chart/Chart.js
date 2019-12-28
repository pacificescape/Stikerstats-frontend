import React, { Component } from 'react'
import Chart from 'chart.js'

export default class ChartComp extends Component {
    constructor(props) {
        super(props)
        this.node = React.createRef()
        this.state = {}
        Object.assign(this.state, props.data)
    }
    makeChart = () => {
        let node = this.state.name

        let total = this.state.total
        let first = {}
        Object.assign(first, this.state.total[0])
        total.unshift(first)
        total[0].date = Date.now()

        return new Chart(node, {
            type: 'line',
            data: {
                labels: total.map((i) => `${new Date(i.date).getDate()}/${new Date(i.date).getMonth() + 1}`).reverse(),
                datasets: [{
                    label: '',
                    data: total.map((i) => {
                        return {
                            x: `${new Date(i.date).getDate()}/${new Date(i.date).getMonth() + 1}`,
                             y: i.total_usage }
                    }).reverse(),
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend : {
                    display: false
                },
                scales: {
                    yAxes: [{
                        display: false,
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    componentDidMount() {
        this.makeChart()
    }

    render() {
        return (
            <div>
                <canvas
                    id={this.state.name}
                    ref={this.node}
                    width={120}
                    height={120}>
                </canvas>
            </div>
        )
    }
}
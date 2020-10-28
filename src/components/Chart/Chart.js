import React, { Component } from 'react'
import Chart from 'chart.js'

export default class ChartComp extends Component {
    constructor(props) {
        super(props)
        this.node = React.createRef()
        this.state = {
            name: props.name,
            total: props.total,
            colors: props.colors
        }
    }

    addValue = (total) => {
        let first = {}
        let now = Date.now()
        let last = new Date(total[0].date)

        const StartOfDayMs = (ms) => ms - (ms % (86400 * 1000))

        if(StartOfDayMs(now) === StartOfDayMs(last)) {
            return total
        }

        Object.assign(first, total[0])
        total.unshift(first)
        total[0].date = now

        return total
    }

    makeChart = () => {
        let node = this.state.name
        let total = this.addValue(this.state.total)


        return new Chart(node, {
            type: 'line',
            data: {
                labels: total.map((i) => `${new Date(i.date).getDate()}/${new Date(i.date).getMonth() + 1}`).reverse(),
                datasets: [{
                    label: '',
                    data: total.map((i) => {
                        return {
                            x: `${new Date(i.date).getDate()}/${new Date(i.date).getMonth() + 1}`,
                            y: i.total_data
                            }
                    }).reverse(),
                    backgroundColor: [
                        this.state.colors.bg
                    ],
                    borderColor: [
                        this.state.colors.border
                    ],
                    borderWidth: 2
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
                        display: true,
                        stacked: false,
                        ticks: {
                            min: 0,
                            stepSize: 100,
                            beginAtZero: false,
                            mirror: true,
                            maxTicksLimit: 4
                        }
                    }],
                    xAxes: [{
                        display: true,
                        stacked: false,
                        ticks: {
                            maxTicksLimit: 4,
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

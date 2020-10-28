import React, { useState, useEffect, createRef } from 'react';
import Chart from 'chart.js'
import style from './index.module.css'


function QuotAf() {
  const [stats, setStats] = useState([]);

  useEffect(() => {

    const getStats = async () => {
      let result = await fetch('./api/quotAf')
        .then(r => r.json())
      setStats(result)
    }

    getStats()
  }, [])

  const makeChart = (node) => {
    let total = stats.map(v => ({ date: v.date, data: v[node] })).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    const rand = () => 255 - Math.random() * 50
    const color = [rand(), rand(), rand()].join(',')
    return new Chart(node, {
      type: 'bar',
      data: {
        labels: total.map((i) => `${new Date(i.date).getDate()}/${new Date(i.date).getMonth() + 1}`).reverse(),
        datasets: [{
          label: '',
          data: total.map((i) => {
            return {
              x: `${new Date(i.date).getDate()}/${new Date(i.date).getMonth() + 1}`,
              y: i.data
            }
          }).reverse(),
          backgroundColor: Array(total.length).fill(`rgba(${color}, 0.4)`),
          borderColor: Array(total.length).fill(`rgba(${color}, 0.9)`),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: true,
            stacked: false,
            ticks: {
              min: 0,
              stepSize: 1,
              beginAtZero: false,
              mirror: true,
              maxTicksLimit: 7
            }
          }],
          xAxes: [{
            display: true,
            stacked: false,
            ticks: {
              stepSize: 1,
              maxTicksLimit: 25,
            }
          }]
        }
      }
    })
  }
  ['stickers', 'users', 'generated', 'latency'].forEach(v => makeChart(v))

  return (
    <div className={style.wrapper}>
      <div className="canvas-stickers">
        <h2>stickers</h2>
        <canvas
        id={"stickers"}>

        </canvas>
      </div>
      <div className="canvas-users">
        <h2>users</h2>
        <canvas
        id={"users"}>

        </canvas>
      </div>
      <div className="canvas-generated">
        <h2>generated</h2>
        <canvas
        id={"generated"}>

        </canvas>
      </div>
      <div className="canvas-latency">
        <h2>latency</h2>
        <canvas
        id={"latency"}>

        </canvas>
      </div>
    </div>
  );
}

export default QuotAf

import React, { useState, useEffect } from 'react';
import style from './index.module.css'

function QuotAf() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      let result = await fetch('./api/quotAf')
        .then(r => r.json())
      // .catch(er => setStats(er.message))
      setStats(result)
    }

    getStats()
  }, [])

  const parseStats = () => stats.map(v => {
    v.date = new Date(v.date)
    return (
      <div className={style.stats} key={v.date}>
        <div>date: {v.date.getDate() + '.' + (v.date.getMonth() + 1) + '.' + v.date.getFullYear()}</div>
        <div>stickers: {v.stickers}</div>
        <div>packs: {v.packs}</div>
        <div>inline: {v.inline}</div>
        <div>private: {v.private}</div>
        <div>users: {v.users.length}</div>
        <div>generated: {v.generated}</div>
        <div>latency: {(v.latency / 1000 / v.generated).toFixed(2)}</div>
      </div>
    )
  })


  const result = parseStats()
  console.log(stats)
  return (
    <div className={style.wrapper}>
      {result}
    </div>
  );
}

export default QuotAf

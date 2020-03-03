import React from 'react'
import styles from './TopPackList.module.css'
import TopPack from '../TopPack/TopPack'

const renderTopList = (tops, showAllCharts) => {
    // let list = this.state.tops.sort((a, b) => b.main.total_usage - a.main.total_usage)
    return tops.map((e, i) => <TopPack data={e} key={i} showAllCharts={showAllCharts} />)
}

const TopPackList = (props) => {
    let topList = props.tops.length ? renderTopList(props.tops, props.showAllCharts) : 'Загрузка...'
    return (
        <div className={styles.topListWrapper}>
            <div className={styles.topListContainer}>
                {topList}
            </div>
        </div>
    )
}

export default TopPackList

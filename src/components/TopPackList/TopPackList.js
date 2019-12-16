import React from 'react'
import styles from './TopPackList.module.css'
import TopPack from '../TopPack/TopPack'

const renderTopList = (tops) => {
    // let list = this.state.tops.sort((a, b) => b.main.total_usage - a.main.total_usage)
    return tops.map((e, i) => <TopPack data={e} key={i} />)
}

const TopPackList = (props) => {
    let topList = props.tops.length ? renderTopList(props.tops) : ''
    return (
        <div className={styles.topListWrapper}>
            <div className={styles.topListContainer}>
                {topList}
            </div>
        </div>
    )
}

export default TopPackList

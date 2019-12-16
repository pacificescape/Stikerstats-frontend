import React from 'react'
import { getMyPacks } from '../../api'
import TopPackList from '../TopPackList/TopPackList'

const myPacks = () => {
    return getMyPacks()
}

const MyPacks = () => {
    let list = myPacks()

    if (list) return (<span>'У вас нет стикерпаков'</span>)

    return (
        <div>
            <h5>Your Top</h5>
            <TopPackList tops={myPacks} />
        </div>
    )
}

export default MyPacks

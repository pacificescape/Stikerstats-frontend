import React, {Component} from 'react'
import { getMyPacks } from '../../api'
import TopPackList from '../TopPackList/TopPackList'
import styles from './MyPacks.module.css'

export default class MyPacks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isError: false,
            error: {},
            tops: [],
        }
    }
    componentDidMount() {
        let list = getMyPacks()

        list.then((tops) => {
            this.setState({tops})
        })

    }
    render() {
        if (!this.state.tops.length) return (<h5>У вас нет стикерпаков</h5>)

        return (
            <div>
                <h5>Your Top</h5>
                <TopPackList tops={this.state.tops} />
            </div>
        )
    }
}

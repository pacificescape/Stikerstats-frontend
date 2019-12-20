import React, {Component} from 'react'
import { getMyPacks } from '../../api'
import TopPackList from '../TopPackList/TopPackList'

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
        if (!this.state.tops.length) return (<span>'У вас нет стикерпаков'</span>)

        return (
            <div>
                <h5>Your Top</h5>
                <TopPackList tops={this.state.tops} />
            </div>
        )
    }
}

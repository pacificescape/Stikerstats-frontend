import React, { Component } from 'react'
import './App.css';
import { getTop } from './api'
import { TopPack } from './components'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      error: {},
      isLoading: true,
      isAuth: false,
      tops: [],
      data: {},
    }
  }

  componentDidMount() {
    getTop()
      .then((tops) => {
        this.setState({ tops })
      })
  }

  renderTopList = () => {
    let list = this.state.tops.sort((a,b) => b.main.total_usage - a.main.total_usage)
  return list.map((e, i) => <TopPack data={e} key={i}/>)
  }

  render() {
    let topList = this.state.tops ? this.renderTopList() : ''
    return (
      <div className="topListContainer">
        {topList}
      </div>
    )
  }
}

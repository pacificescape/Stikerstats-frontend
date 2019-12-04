import React, { Component } from 'react'
import './App.css';
import { getTop } from './api'

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
        tops = tops.map((c) => c.title)
        this.setState({ tops })
      })
  }

  render() {
    let tops = this.state.tops.map((e, i) => <li key={i}>{e}</li>)
    return (
      <ul>
        {tops}
      </ul>
    )
  }
}

import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import { getTop } from './api'
import { TopPackList, MyPacks } from './components'

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
        if (tops) {
          this.setState({ tops })
        }
      })
  }



  render() {
    return (
      <div>
        <header>
          <h2>
            Top of stickerpaks
          </h2>
          <h6 style={{ 'color': '#8b8baa', 'marginTop': '5px' }}><a href={'tg://resolve?domain=stickstatbot'}>to add your pack use @stickstatbot</a></h6>
        </header>
        <Link to="/mypacks">My stickerpacks</Link>
        <Switch>
          <Route path="/mypacks">
            <MyPacks/>
          </Route>
          <Route path="/">
            <TopPackList tops={this.state.tops} />
          </Route>
        </Switch>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import { getTop } from './api'
import { TopPackList, MyPacks } from './components'
import autoprefixer from 'autoprefixer';

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

  links = {
    "margin": "auto",
    "width": "fit-content",
    "display": "block"
  }


  render() {
    return (
      <div>
        <header>
          <h2 style={{ 'color': '#8b8baa', 'margin': 'auto' }}>
            Top of stickerpaks
          </h2>
          <h6 style={{ 'color': '##aeaeb6', 'marginTop': '5px' }}><a href={'tg://resolve?domain=stickstatbot'}>to add your pack use @stickstatbot</a></h6>
        </header>
        <Switch>
          <Route path="/mypacks">
            <Link style={this.links} className="mypack" to="/">Top stickerpacks</Link>
            <MyPacks/>
          </Route>
          <Route path="/">
            <Link style={this.links} className="mypack" to="/mypacks">My stickerpacks</Link>
            <TopPackList tops={this.state.tops} />
          </Route>
        </Switch>
      </div>
    )
  }
}

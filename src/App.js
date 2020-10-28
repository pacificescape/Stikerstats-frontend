import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import style from './App.module.css'
import { getTop } from './api'
import { TopPackList, MyPacks, Footer, Widget, QuotAf } from './components'

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

  showAllInstalls = () => {
    let logo = document.getElementsByClassName('logo')
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.display = "none"
    }
    let installed = document.getElementsByClassName('installedchart')
    for (let i = 0; i < installed.length; i++) {
      installed[i].style.display = "block"
    }
  }

  showAllUsages = () => {
    let logo = document.getElementsByClassName('logo')
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.display = "none"
    }
    let usages = document.getElementsByClassName('usagechart')
    for (let i = 0; i < usages.length; i++) {
      usages[i].style.display = "block"
    }
  }

  hideAllCharts = () => {
    let logo = document.getElementsByClassName('logo')
    for (let i = 0; i < logo.length; i++) {
      logo[i].style.display = "inline-block"
    }
    let usages = document.getElementsByClassName('usagechart')
    for (let i = 0; i < usages.length; i++) {
      usages[i].style.display = "none"
    }
    let installed = document.getElementsByClassName('installedchart')
    for (let i = 0; i < installed.length; i++) {
      installed[i].style.display = "none"
    }
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
          <div className={style.buttons}>
            <span className={style.links + " mypack"} onMouseOver={this.showAllInstalls} onMouseOut={this.hideAllCharts}>all installs</span>
            <span className={style.links + " mypack"} onMouseOver={this.showAllUsages} onMouseOut={this.hideAllCharts}>all usages</span>
            <Link className={style.links + " mypack"} to="/">Top stickerpacks</Link>
          </div>
            <MyPacks/>
          </Route>
          <Route path="/quotafbot">
            <div className={style.buttons}>
              <span className={style.links + " mypack"} onMouseOver={this.showAllInstalls} onMouseOut={this.hideAllCharts}>all installs</span>
              <span className={style.links + " mypack"} onMouseOver={this.showAllUsages} onMouseOut={this.hideAllCharts}>all usages</span>
              <Link className={style.links + " mypack"} to="/mypacks">My stickerpacks</Link>
              <Link className={style.links + " mypack"} to="/">All stickerpacks</Link>
            </div>
            <QuotAf/>
          </Route>
          <Route path="/">
          <div className={style.buttons}>
            <span className={style.links + " mypack"} onMouseOver={this.showAllInstalls} onMouseOut={this.hideAllCharts}>all installs</span>
            <span className={style.links + " mypack"} onMouseOver={this.showAllUsages} onMouseOut={this.hideAllCharts}>all usages</span>
            <Link className={style.links + " mypack"} to="/mypacks">My stickerpacks</Link>
            <Link className={style.links + ' mypack'} to="/quotafbot">QuotAfBot stats</Link>
          </div>
            <TopPackList tops={this.state.tops}/>
          </Route>
        </Switch>
        <Widget/>
        <Footer/>
      </div>
    )
  }
}

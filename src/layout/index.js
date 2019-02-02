import React, { Component } from 'react'
import { Button } from 'antd'
import LeftMenu from './leftMenu'
import Content from './Content'
import Header from './header'
import Footer from './footer'

export default class App extends Component{
  render() {
    return (
      <div className="App">
        <LeftMenu/>
        <Header/>
        <Footer/>
        <Content/>
      </div>
    )
  }
}


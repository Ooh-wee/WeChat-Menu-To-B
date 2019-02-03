import * as React from 'react'
import LeftMenu from './leftMenu'
import Container from './container'
import Header from './header'
require('../style/layout.css')

export default class App extends React.Component{
  render() {
    return (
      <div className="App">
        <LeftMenu/>
        <Header/>
        <Container/>
      </div>
    )
  }
}


// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import News from './components/News';
import NewsItems from './components/NewsItems';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>

          <News/>

          <NewsItems/>
      </div>
    )
  }
}




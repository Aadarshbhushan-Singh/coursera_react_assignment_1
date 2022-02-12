import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {

  render() {
    return <div>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </div>;
  }
}


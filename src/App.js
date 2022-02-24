import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import { Provider }  from 'react-redux';
import  ConfigureStore  from './redux/configureStore';

const store = ConfigureStore();

export default class App extends Component {

  render() {
    return <div>
      {/* <BrowserRouter>
        <MainComponent />
      </BrowserRouter> */}

      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>
    </div>;
  }
}


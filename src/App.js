import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import MenuComponent from './Components/MenuComponent'
import { DISHES } from './shared/dishes'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      dishes: DISHES
    }
  }

  render() {
    return <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={this.state.dishes} />
    </div>;
  }
}


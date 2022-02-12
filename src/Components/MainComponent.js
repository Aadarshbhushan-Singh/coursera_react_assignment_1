import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import MenuComponent from './MenuComponent'
import { DISHES } from '../shared/dishes'
import DishDetailsComponent from './DishDetailsComponent';

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }


    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <div className="container">
                <div className="row">
                    <DishDetailsComponent selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>
                </div>
            </div>
        );
    }
}


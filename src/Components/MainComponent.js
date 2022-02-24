import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuComponent from './MenuComponent'
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent'
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetailsComponent from './DishDetailsComponent';
import About from './AboutComponent';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

export class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
            
        };
    }
    
    render() {
        
        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetailsComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
      


        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' component={Contact} />
                    {/* Passed leader as prop to the about component. */}
                    <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps)(MainComponent));

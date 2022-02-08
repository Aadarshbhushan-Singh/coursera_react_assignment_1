import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

export default class DishDetailsComponent extends Component {
    constructor(props) {
        super(props);

    }
    //This function is used to render dish.
    renderDish(dish) {
        if (dish != null) {
            return (<>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </>
            );
        }
        else {
            return (
                <div>Not selected anything!</div>
            );

        }
    }

    renderComments(dish){
        if(dish != null){
            return (<>
            <h2>Comments</h2>
                {dish.comments.map((item)=>{
                    return <div key={item.id}>
                        <p>{item.comment}</p>
                        <p>--{item.author}, {new Date(item.date).toDateString()}</p>
                    </div>
                })}
            </>);
        }else{
            return(<>
                    <div></div>
                </>
            )
        }
    }

    render() {
        return (
            <>
            <div className="container col-12 col-md-5 m-1" >
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}  
                </div>
            </div>
            <div className="container col-12 col-md-5 m-1" >
                <div className="row">
                    {this.renderComments(this.props.selectedDish)}  
                </div>
            </div>
            </>
            
        );
    }

}

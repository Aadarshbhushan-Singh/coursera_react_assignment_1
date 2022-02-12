import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'


//This function is used to render dish.
function RenderDish({ dish }) {
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

function RenderComments({ dish }) {
    if (dish != null) {
        return (<>
            <h2>Comments</h2>
            {dish.comments.map((item) => {
                return <div key={item.id}>
                    <p>{item.comment}</p>
                    <p>--{item.author}, {new Date(item.date).toDateString()}</p>
                </div>
            })}
        </>);
    } else {
        return (<>
            <div></div>
        </>
        )
    }
}

const DishDetailsComponent = (props) => {
    return (
        <>
            <div className="container col-12 col-md-5 m-1" >
                <div className="row">
                    <RenderDish dish={props.selectedDish}/>
                </div>
            </div>
            <div className="container col-12 col-md-5 m-1" >
                <div className="row">
                    <RenderComments dish={props.selectedDish} />
                </div>
            </div>
        </>

    );
}


export default DishDetailsComponent;



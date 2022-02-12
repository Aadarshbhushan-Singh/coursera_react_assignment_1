import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


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

function RenderComments({ comments }) {
    if (comments != null) {
        return (<>
            <div className="container">
                <h2>Comments</h2>
                {comments.map((item) => {
                    return <div key={item.id}>
                        <p>{item.comment}</p>
                        <p>--{item.author}, {new Date(item.date).toDateString()}</p>
                    </div>
                })}
            </div>
        </>);
    } else {
        return (<>
            <div></div>
        </>
        )
    }
}

const DishDetailsComponent = ({ dish, comments }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={comments} />
                    </div>
                </div>
            </div>
        </>

    );
}


export default DishDetailsComponent;



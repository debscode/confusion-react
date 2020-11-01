import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    return (
        comments.map((dishComment) => {
            let date = new Date(dishComment.date);
            let dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
            date = date.toLocaleString('en-US', dateOptions);
            return (
                <div key={dishComment.id}>
                    <ul className="list-unstyled">
                        <li>{dishComment.comment}</li>
                        <li className="mt-2">-- {dishComment.author}, {date}</li>
                    </ul>
                </div>
            );
        })
    );

}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;
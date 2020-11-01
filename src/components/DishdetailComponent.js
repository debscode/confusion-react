import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(dish) {
        const comments = dish.comments.map((dishComment) => {
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
        });
        return comments;
    }

    render() {

        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish)}
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
}

export default Dishdetail;
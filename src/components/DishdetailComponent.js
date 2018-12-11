import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
    return (
        <Card key={dish.id}>
            <CardImg width="100%" src={dish.image}
                     alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}) {
    return comments.map((comment) => {
        const time = new Date(comment.date);
        const commentedTime = time.toDateString().substring(4, 10) + ", " + time.getFullYear();
        return (
            <div key={comments.id}>
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li> -- {comment.author} , {commentedTime}</li>
                </ul>
            </div>
        );
    });
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selectedDish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    <RenderComments comments={props.selectedDish.comments}/>
                </div>
            </div>
        </div>
    );
};

export default DishDetail;
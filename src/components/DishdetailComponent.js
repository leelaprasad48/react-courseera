import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderDish({dish}) {
    if (dish && dish.id > -1) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                    <CardImg width="100%" src={dish.image}
                             alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return (<div/>);
    }

}

function RenderComments({comments}) {
    if (comments !== null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((comment) => {
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
                })}
            </div>
        );
    } else {
        return (
            <div/>
        );
    }
}

const DishDetail = (props) => {

    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    {props.dish.name}
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr/>
            </div>
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments comments={props.comments}/>
            </div>
        </div>
    );
};

export default DishDetail;
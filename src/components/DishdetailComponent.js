import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(selectedDish) {
        return selectedDish.comments.map((comment) => {
            const time = new Date(comment.date);
            const commentedTime = time.toDateString().substring(4,10) + ", " + time.getFullYear();
            return (
                <div key={selectedDish.comments.id}>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li> -- {comment.author} , {commentedTime}</li>
                    </ul>
                </div>
            );
        });
    }

    render() {

        return (
            <>
                <div key={this.props.selectedDish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </>
        );
    }
}

export default DishdetailComponent;
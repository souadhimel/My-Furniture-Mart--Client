import React from "react";
import Rating from "react-rating";
import { Card, Col } from "react-bootstrap";

const SingleReview = (props) => {
  const { name, rating, comment } = props.review;

  return (
    <div className="single rating">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title className="text-white text-center fw-bold bg-dark p-2 rounded">
              {name}
            </Card.Title>
            <Card.Text className="text-dark text-center fw-bold">
              {comment}
            </Card.Text>
            <p className="text-primary text-center fw-bold">
              Rating : {rating}/5
            </p>
            <Rating
              className="text-warning"
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={rating}
              readonly
            />
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleReview;

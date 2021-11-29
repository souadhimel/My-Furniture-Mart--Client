import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleReview from "./SingleReview";
import { Row } from "react-bootstrap";
import "./Review.css";

const DisplayReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://desolate-sands-22384.herokuapp.com/rating")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div>
        <h2
          className="text-center mt-8"
          style={{ color: "var(--green)", fontSize: "5rem", marginTop: "50px" }}
        >
          Customer Rating
        </h2>
        {reviews.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <div className="container">
            <Row xs={1} md={3} className="g-4">
              {reviews.map((review) => (
                <SingleReview key={review._id} review={review}></SingleReview>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayReview;

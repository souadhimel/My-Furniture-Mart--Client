import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleReview from "./SingleReview";

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
          style={{ color: "var(--green)", fontSize: "5rem" }}
        >
          Customer Rating
        </h2>
        {reviews.length === 0 ? (
          <Spinner animation="border" />
        ) : (
          <div className="container">
            <div className="row">
              {reviews.map((review) => (
                <SingleReview key={review._id} review={review}></SingleReview>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayReview;

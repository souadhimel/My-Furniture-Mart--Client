import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";

library.add(fullStar, emptyStar);

const SingleReview = (props) => {
  const { name, rating, comment } = props.review;

  return (
    <div className="col-lg-4">
      <div className="card mb-3 justify-content-center  p-3">
        <div className="d-flex justify-content-between my-3">
          <h4 className="my-3">{name}</h4>
        </div>

        <h3>Rating: {rating}</h3>
        <Rating
          readonly
          style={{ color: "goldenrod" }}
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
          fullSymbol={<FontAwesomeIcon icon={fullStar} />}
        />
        <p className="text-justify">{comment}</p>
      </div>
    </div>
  );
};

export default SingleReview;

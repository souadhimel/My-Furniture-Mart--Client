import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { img, name, description, price, _id } = props.product;

  return (
    <div className="col service-card">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h3 className="text-center">{name}</h3>
          <h5>Description:{description}</h5>
          <h5>Price:{price}</h5>

          <Link className="btn btn-danger" to={`/services/${_id}`}>
            Purchase now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

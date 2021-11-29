import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://desolate-sands-22384.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <div style={{ marginTop: 20 }}>
      <h2
        style={{ color: "var(--green)", fontSize: "5rem" }}
        className="text-center"
      >
        Products
      </h2>
      <div className="container">
        <Row xs={1} md={3} className="g-4 h-100">
          {products.map((p) => (
            <Product key={p._id} product={p}></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Explore;

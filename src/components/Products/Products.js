import React from "react";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import "./Products.css";
import { Row } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://desolate-sands-22384.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  });
  return (
    <div style={{ marginTop: 20 }}>
      <h2
        style={{ color: "var(--green)", fontSize: "5rem" }}
        className="text-center "
      >
        Products
      </h2>
      <div>
        <Row xs={1} md={2} className=" m-5 p-3 g-5 ">
          {products.map((p) => (
            <Product key={p._id} product={p}></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;

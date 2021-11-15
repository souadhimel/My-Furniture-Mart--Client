import React, { useState, useEffect } from "react";
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
      <h2 className="text-center bg-warning">Products</h2>
      <div className="row row-cols-md-3 g-3">
        {products.map((p) => (
          <Product key={p._id} product={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Explore;

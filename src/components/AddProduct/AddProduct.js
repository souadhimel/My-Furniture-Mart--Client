import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://desolate-sands-22384.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service" style={{ marginTop: 30 }}>
      <h2 className="text-center">Please add a product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Product name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <input
          className="form-control"
          type="number"
          {...register("price")}
          placeholder="Price"
        />
        <input
          className="form-control"
          {...register("img")}
          placeholder="image url"
        />
        <input className="btn btn-warning form-control" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;

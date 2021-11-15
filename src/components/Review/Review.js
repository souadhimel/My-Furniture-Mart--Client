import React from "react";
import "./Review.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://desolate-sands-22384.herokuapp.com/rating", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service" style={{ marginTop: 50 }}>
      <h2 className="text-center">Please leave your valuable feedback here</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-3"
          {...register("email")}
          value={user?.displayName}
          required
        />
        <input
          className="form-control mb-3"
          {...register("name")}
          // value={user?.email}
          required
        />
        <input
          className="form-control mb-3"
          type="number"
          {...register("rating")}
          placeholder="rating(0-5)"
          required
        />
        <textarea
          rows="4"
          className="form-control mb-3"
          {...register("comment")}
          placeholder="Please write your comment here"
          required
        />
        <input className="btn btn-success w-25 fw-bold" type="submit" />
      </form>
    </div>
  );
};

export default Review;

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { handleRegister } = useAuth();

  const onSubmit = (data) => {
    // console.log(data);
    const user = { email: data.email, displayName: data.name };
    axios
      .post("https://desolate-sands-22384.herokuapp.com/users", user)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          handleRegister(data?.email, data?.password, data?.name);
          reset();
        }
      });
  };
  return (
    <div className="bg-white text-center pb-5">
      <h3 className="text-center text-white py-5">Register</h3>
      <div className="w-50 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="name"
            className="form-control bg-dark text-white mb-3"
            {...register("name")}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="form-control bg-dark text-white mb-3"
            {...register("email")}
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            className="form-control bg-dark text-white mb-3"
            {...register("password")}
            placeholder="Your password"
            required
          />
          <input
            type="password"
            className="form-control bg-dark text-white mb-3"
            {...register("password")}
            placeholder="Confirm Your password"
            required
          />
          <button className="btn btn-danger w-100 fw-bold" type="submit">
            Register
          </button>
        </form>
      </div>
      <br />
      <Link
        style={{ textDecoration: "none", textAlign: "center", color: "blue" }}
        to="/login"
      >
        Already Register ? Please Login
      </Link>
    </div>
  );
};

export default Register;

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Register.css";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { handleRegister } = useAuth();
  //Redirect
  const history = useHistory();

  const onSubmit = (data) => {
    // console.log(data);
    const user = { email: data.email, displayName: data.name };
    axios
      .post("https://desolate-sands-22384.herokuapp.com/users", user)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You have registered successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          handleRegister(data?.email, data?.password, data?.name);
          history.push("/");
          reset();
        }
      });
  };
  return (
    <div className="bg-white text-center pb-5">
      <div>
        <img
          style={{ width: 100 }}
          src="https://assignment-012.web.app/static/media/avater.abc26752.png"
          alt=""
        />
      </div>
      <h3 className="text-center text-dark py-5">Please register here free!</h3>
      <div className="w-50 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="name"
            className="form-control text-black mb-3"
            {...register("name")}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            className="form-control  text-black mb-3"
            {...register("email")}
            placeholder="Your email"
            required
          />
          <input
            type="password"
            className="form-control text-black mb-3"
            {...register("password")}
            placeholder="Your password"
            required
          />
          <input
            type="password"
            className="form-control  text-black mb-3"
            {...register("password")}
            placeholder="Confirm your password"
            required
          />
          <button className="btn btn-warning w-100 fw-bold" type="submit">
            Register
          </button>
        </form>
      </div>
      <br />
      <div
        className="text-center"
        style={{
          textDecoration: "none",
          color: "black",
          marginTop: "10px",
          fontSize: "15px",
        }}
      >
        Already Registered ?<Link to="/login">Please Login</Link>
      </div>
    </div>
  );
};

export default Register;

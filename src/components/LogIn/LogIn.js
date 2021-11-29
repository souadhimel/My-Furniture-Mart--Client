import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./LogIn.css";
import Swal from "sweetalert2";

const LogIn = () => {
  const {
    signInWithGoogle,
    user,
    setUser,
    logOut,
    setIsLoading,
    handleEmailLogin,
  } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  //Redirect
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location?.state?.from || "/";

  // Google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have logged in successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        history.push(redirect_url);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Email & password submission
  const onSubmit = (data) => {
    console.log(data);
    handleEmailLogin(data.email, data.password, location, history);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have logged in successfully!",
      showConfirmButton: false,
      timer: 1500,
    });

    reset();
  };

  return (
    <>
      <div className="login text-center py-5 w-100 ">
        <div className=" p-5">
          <div>
            <img
              style={{ width: 100 }}
              src="https://assignment-012.web.app/static/media/avater.abc26752.png"
              alt=""
            />
          </div>
          <h3 className=" text-dark pb-3">Please login to your account</h3>
          <div className="w-50 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                style={{
                  margin: "5px",
                  border: "2px solid red",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                className="form-control  text-black mb-3"
                {...register("email")}
                placeholder="Your email address"
                required
              />
              <br /> <br />
              <input
                type="password"
                style={{
                  margin: "5px",
                  border: "2px solid red",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                className="form-control  text-black mb-3"
                {...register("password")}
                placeholder="Your password"
                required
              />
              <br /> <br />
              <button className="btn btn-warning w-100 fw-bold" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto p-0">
          <div className="text-center">
            {!user?.displayName ? (
              <button
                onClick={handleGoogleLogin}
                className="btn btn-white google border-rounded font-bold"
              >
                <FcGoogle></FcGoogle>
              </button>
            ) : (
              <button
                onClick={logOut}
                className="btn btn-success mt-3 text-white"
              >
                Log Out
              </button>
            )}
            <br />
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginTop: "10px",
                fontSize: "15px",
              }}
              to="/register"
            >
              New User ? Please Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;

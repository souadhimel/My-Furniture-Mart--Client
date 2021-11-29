import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./AddOrder.css";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import Swal from "sweetalert2";

const AddOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product);
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://desolate-sands-22384.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("https://desolate-sands-22384.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your order has been successfully submitted!",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result);
      });
  };

  return (
    <>
      <div className="AddOrder-container">
        <div className="row-container">
          <div className="col-md-6 single-item">
            <img className="w-100" src={product?.img} alt="" />
            <h2>Name:{product?.name}</h2>
            <p>Description:{product?.description}</p>
            <h1>Price:{product?.price}</h1>
          </div>
          <div className="col-md-6 single-item">
            <h2>Purchase Now</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-3"
                defaultValue={user.displayName}
                {...register("name")}
              />

              <input
                className="form-control mb-3"
                defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                className="form-control mb-3"
                placeholder="Status"
                defaultValue={"pending"}
                {...register("status")}
              />

              <input
                className="form-control mb-3"
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input
                className="form-control mb-3"
                placeholder="City"
                defaultValue=""
                {...register("city")}
              />
              <input
                className="form-control mb-3"
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <input className="btn btn-success px-5" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrder;

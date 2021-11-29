import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const [order, setOrder] = useState({});
  const [isUpdate, setIsUpdated] = useState(null);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const url = `https://desolate-sands-22384.herokuapp.com/orders/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id, isUpdate]);

  const onSubmit = (data) => {
    fetch(`https://desolate-sands-22384.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsUpdated(true);
          reset();
        } else {
          setIsUpdated(false);
        }
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control m-3 w-50 justify-content-center align-items-center"
          defaultValue={order?.status}
          {...register("status")}
          required
        />

        <input className="btn btn-success  w-25" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;

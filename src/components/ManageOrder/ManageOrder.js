import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://desolate-sands-22384.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  // Delete in UI
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://desolate-sands-22384.herokuapp.com/orders/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
            const remainingProducts = orders.filter(
              (order) => order?._id !== id
            );
            setOrders(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="py-3">
          <h2 className="text-center">Manage Order</h2>
        </div>

        <div className="mx-auto">
          <Table striped bordered responsive hover>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>User Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order?._id}</td>
                  <td>{order?.name}</td>
                  <td>{order?.price}</td>
                  <td>{order?.status}</td>
                  <td>
                    <Link to={`/update/${order._id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(order?._id)}
                      className="btn btn-danger ms-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;

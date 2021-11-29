import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useFirebase();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`https://desolate-sands-22384.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);

  const orderCancel = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://desolate-sands-22384.herokuapp.com/orders/${id}`;
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
            const remainingProducts = myOrders?.filter(
              (order) => order?._id !== id
            );
            setMyOrders(remainingProducts);
          }
        });
    }
  };

  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div>
            <h2 className="text-center">My Orders</h2>
          </div>
          <div className="mx-auto">
            <Table striped bordered responsive hover>
              <thead>
                <tr>
                  <th>Product Id</th>
                  {/* <th>User Name</th>
                  <th>Price</th> */}
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order?._id}</td>
                    {/* <td>{order?.displayName}</td>
                    <td>{order?.price}</td> */}
                    <td>{order?.status}</td>
                    <td>
                      <button
                        onClick={() => orderCancel(order?._id)}
                        className="btn btn-danger ms-2"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

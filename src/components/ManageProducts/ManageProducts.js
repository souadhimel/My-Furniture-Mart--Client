import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://desolate-sands-22384.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://desolate-sands-22384.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
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
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };

  return (
    <div style={{ marginTop: 3 }}>
      <h2 className="text-center mb-3">Manage products</h2>

      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <div className="text-center mb-3" key={service._id}>
            <div>
              <img src={service.img} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <h3 className="text-center">{service.name}</h3>
              <h5>Description:{service.description}</h5>
              <h5>Price:{service.price}</h5>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(service._id)}
              >
                Delete <AiFillDelete></AiFillDelete>
              </button>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default ManageProducts;

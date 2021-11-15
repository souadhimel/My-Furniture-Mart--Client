import React, { useState, useEffect } from "react";

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
          alert("Deleted successfully");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div style={{ marginTop: 30 }}>
      <h2 className="text-center mb-3">manage products</h2>
      {services.map((service) => (
        <div className="text-center mb-3" key={service._id}>
          <div className="col service-card">
            <div className="card row row-cols-md-3 g-3">
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
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageProducts;

{
  /* <div className="col service-card">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <h3 className="text-center">{name}</h3>
          <h5>Description:{description}</h5>
          <h5>Price:{price}</h5>

          <Link className="btn btn-primary" to={`/services/${_id}`}>
            AddOrder
          </Link>
        </div>
      </div>
    </div> */
}

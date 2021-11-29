// import React, { useEffect, useState } from "react";
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// import "./Dashboard.css";
// import { Button, Col, Container, Row } from "react-bootstrap";
// import useFirebase from "../../../Hooks/useFirebase";
// import AddProduct from "../../AddProduct/AddProduct";
// import ManageProducts from "../../ManageProducts/ManageProducts";
// import Review from "../../Review/Review";
// import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import MyOrder from "../../MyOrder/MyOrder";
// import ManageOrder from "../../ManageOrder/ManageOrder";
// import Payment from "../../Payment/Payment";
// import AdminRoute from "../../PrivateRoute/AdminRoute";
// import useAuth from "../../../Hooks/useAuth";

// const Dashboard = () => {
//   let { path, url } = useRouteMatch();
//   const { user } = useFirebase();
//   const [isAdmin, setIsAdmin] = useState(false);
//   const { logOut, admin } = useAuth();

//   useEffect(() => {
//     fetch(
//       `https://desolate-sands-22384.herokuapp.com/checkAdmin/${user?.email}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data[0]?.role === "admin") {
//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//         }
//       });
//   }, [user?.email]);
//   console.log(isAdmin);
//   return (
//     <>
//       <Container>
//         <Row>
//           <div className="dashboard-container ">
//             <div className="row">
//               <div className="col-md-3 ">
//                 <Col
//                   xs={12}
//                   sm={12}
//                   md={2}
//                   lg={2}
//                   // style={{ borderRight: "3px solid gray", paddingTop: "30px" }}
//                 >
//                   <ul
//                     style={{
//                       listStyle: "none",
//                       marginLeft: "0px",
//                       paddingLeft: "0px",
//                     }}
//                   >
//                     <div className="dashboard">
//                       {user?.role === "admin" ? (
//                         <h6 className="fw-bold text-uppercase">
//                           Admin Dashboard
//                         </h6>
//                       ) : (
//                         <h6 className="fw-bold text-uppercase">
//                           User Dashboard
//                         </h6>
//                       )}

//                       {/* NORMAL USERS FEATURES  */}

//                       {!admin && (
//                         <div>
//                           <Link to={`${url}/myOrder`}>
//                             <li className="btn btn-success mb-2 w-100">
//                               My Order
//                             </li>
//                           </Link>
//                           <Link to={`${url}/payment`}>
//                             <li className="btn btn-success mb-2 w-100">
//                               Payment
//                             </li>
//                           </Link>
//                           <Link to={`${url}/review`}>
//                             <li className="btn btn-success mb-2 w-100">
//                               Review
//                             </li>
//                           </Link>
//                         </div>
//                       )}

//                       {/* Admin FEATURES  */}
//                       {admin && (
//                         <div>
//                           <Link to={`${url}/addProduct`}>
//                             <li className="btn btn-success mb-2 w-100">
//                               Add Product
//                             </li>
//                           </Link>
//                           <Link to={`${url}/makeAdmin`}>
//                             <li className="btn btn-success mb-2 w-100">
//                               Make Admin
//                             </li>
//                           </Link>
//                           <Link to={`${url}/manageProducts`}>
//                             <li className="btn btn-success mb-2 w-100 ">
//                               Manage Product
//                             </li>
//                           </Link>
//                           <Link className="w-100" to={`${url}/manageOrder`}>
//                             <li className="btn btn-success mb-2 w-100 ">
//                               Manage Order
//                             </li>
//                           </Link>
//                         </div>
//                       )}
//                       <button onClick={logOut} className="btn btn-primary">
//                         Log out
//                       </button>
//                     </div>
//                   </ul>
//                 </Col>
//               </div>
//               <div className="col-md-9">
//                 <Switch>
//                   <Route exact path={`${path}/myOrder`}>
//                     <MyOrder></MyOrder>
//                   </Route>
//                   <Route path={`${path}/review`}>
//                     <Review></Review>
//                   </Route>
//                   <Route path={`${path}/payment`}>
//                     <Payment></Payment>
//                   </Route>
//                   <AdminRoute path={`${path}/makeAdmin`}>
//                     <MakeAdmin></MakeAdmin>
//                   </AdminRoute>
//                   <AdminRoute path={`${path}/manageOrder`}>
//                     <ManageOrder></ManageOrder>
//                   </AdminRoute>
//                   <AdminRoute path={`${path}/addProduct`}>
//                     <AddProduct></AddProduct>
//                   </AdminRoute>
//                   <AdminRoute path={`${path}/manageProducts`}>
//                     <ManageProducts></ManageProducts>
//                   </AdminRoute>
//                 </Switch>
//               </div>
//             </div>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import "./Dashboard.css";
import useFirebase from "../../../Hooks/useFirebase";
import AddProduct from "../../AddProduct/AddProduct";
import ManageProducts from "../../ManageProducts/ManageProducts";
import Review from "../../Review/Review";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrder from "../../MyOrder/MyOrder";
import ManageOrder from "../../ManageOrder/ManageOrder";
import Payment from "../../Payment/Payment";
import AdminRoute from "../../PrivateRoute/AdminRoute";
import useAuth from "../../../Hooks/useAuth";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

// import UpdateProduct from "../components/UpdateProduct.js";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);
  const { logOut, admin } = useAuth();
  useEffect(() => {
    fetch(
      `https://desolate-sands-22384.herokuapp.com/checkAdmin/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);

  return (
    <div>
      <div className="mx-2 dashboard">
        <Row>
          <Col className="admin-side-bar">
            <div>
              <ul>
                {/* User features in Dashboard */}
                {!admin && (
                  <div>
                    <h6 className="fw-bold text-uppercase">User Dashboard</h6>
                    <div>
                      <Link to={`${url}/myOrder`}>
                        <li className=" btn btn-success">My Order</li>
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Link to={`${url}/payment`}>
                        <li className=" btn btn-success">Payment</li>
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Link to={`${url}/review`}>
                        <li className=" btn btn-success">Review</li>
                      </Link>
                    </div>
                  </div>
                )}
                {/* Admin features in Dashboard */}
                {admin && (
                  <div>
                    <h6 className="fw-bold text-uppercase">Admin Dashboard</h6>
                    <div>
                      {" "}
                      <Link to={`${url}/addProduct`}>
                        <li className=" btn btn-primary">Add Product</li>
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Link to={`${url}/makeAdmin`}>
                        <li className=" btn btn-primary">Make Admin</li>
                      </Link>
                    </div>
                    <div>
                      <Link to={`${url}/manageProducts`}>
                        <li className=" btn btn-primary ">Manage Product</li>
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Link to={`${url}/manageOrder`}>
                        <li className=" btn btn-primary ">Manage Order</li>
                      </Link>
                    </div>
                  </div>
                )}

                <div>
                  <button onClick={logOut} className="btn btn-primary">
                    Log out
                  </button>
                </div>
              </ul>
            </div>
          </Col>
          <Col md={8} lg="9" className="admin-container">
            <Switch>
              <Route exact path={path}>
                <Welcome></Welcome>
              </Route>
              {/* User features in Dashboard */}
              <Route path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>

              {/* Admin features in Dashboard */}
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/manageOrder`}>
                <ManageOrder></ManageOrder>
              </AdminRoute>
              <AdminRoute path={`${path}/addProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;

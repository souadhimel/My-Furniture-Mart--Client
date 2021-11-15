import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
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
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5 style={{ margin: 50 }} className="text-center">
                Dashboard
              </h5>
              {!admin && (
                <div>
                  <Link to={`${url}/myOrder`}>
                    <li className="dashboard-menu btn btn-primary mt-5">
                      My Order
                    </li>
                  </Link>
                  <Link to={`${url}/payment`}>
                    <li className="dashboard-menu btn btn-primary mt-5">
                      Payment
                    </li>
                  </Link>
                  <Link to={`${url}/review`}>
                    <li className="dashboard-menu btn btn-primary mt-5">
                      Review
                    </li>
                  </Link>
                </div>
              )}

              {admin && (
                <div>
                  <Link to={`${url}/addProduct`}>
                    <li className="dashboard-menu btn btn-primary mt-5">
                      Add Product
                    </li>
                  </Link>
                  <Link to={`${url}/makeAdmin`}>
                    <li className="dashboard-menu btn btn-primary">
                      Make Admin
                    </li>
                  </Link>
                  <Link to={`${url}/manageProducts`}>
                    <li className="dashboard-menu btn btn-primary ">
                      Manage Product
                    </li>
                  </Link>
                  <Link className="w-100" to={`${url}/manageOrder`}>
                    <li className="dashboard-menu btn btn-primary ">
                      Manage Order
                    </li>
                  </Link>
                </div>
              )}
              <button onClick={logOut} className="btn btn-primary">
                Log out
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

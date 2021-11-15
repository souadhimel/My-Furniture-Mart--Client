import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import LogIn from "./components/LogIn/LogIn";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import Explore from "./components/Explore/Explore";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AuthProvider from "./Hooks/AuthProvider";

import AddOrder from "./components/AddOrder/AddOrder";
import Update from "./components/Update/Update";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/services/:id">
              <AddOrder></AddOrder>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/update/:id">
              <Update></Update>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

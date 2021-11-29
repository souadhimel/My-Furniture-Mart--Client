import React from "react";
import Gallery from "../Gallery/Gallery";
import Products from "../Products/Products";
import DisplayReview from "../Review/DisplayReview";
import Speciality from "../Speciality/Speciality";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {" "}
      <section className="about" id="about">
        <div className="row">
          <div className="image">
            <img src="https://i.ibb.co/6XC236v/furniture-taglines.png" alt="" />
          </div>

          <div className="content">
            <h3>Your imagination, our creation</h3>
            <p>
              Are you tensed? Please not at all. We are here for your
              design...The most preferred lifestyle solution brand in Bangladesh
            </p>
            <p>We will serve you with your own choice onwards...............</p>
          </div>
        </div>
      </section>
      <Products></Products>
      <Speciality></Speciality>
      <Gallery></Gallery>
      <DisplayReview></DisplayReview>
    </div>
  );
};

export default Home;

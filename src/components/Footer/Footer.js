import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
  FaAmbulance,
  FaDiagnoses,
  FaHeartbeat,
  FaBlog,
} from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { BiBody } from "react-icons/bi";
import {
  FcCallback,
  FcGlobe,
  FcVoicemail,
  FcCellPhone,
  FcHome,
  FcServices,
  FcAbout,
  FcManager,
  FcCheckmark,
  FcComments,
} from "react-icons/fc";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick links</h3>
          <Link to="/home">
            {" "}
            <i>
              <FcHome></FcHome>
            </i>{" "}
            home{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FcServices></FcServices>{" "}
            </i>{" "}
            services{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FcAbout></FcAbout>{" "}
            </i>{" "}
            about{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              <FcManager></FcManager>
            </i>{" "}
            support{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FcCheckmark></FcCheckmark>{" "}
            </i>{" "}
            book{" "}
          </Link>
        </div>

        <div className="box">
          <h3>Our services</h3>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <BiBody></BiBody>{" "}
            </i>{" "}
            care{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <RiPsychotherapyFill></RiPsychotherapyFill>{" "}
            </i>{" "}
            replacement{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FaHeartbeat></FaHeartbeat>{" "}
            </i>{" "}
            design{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FaDiagnoses></FaDiagnoses>{" "}
            </i>{" "}
            art{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FaAmbulance></FaAmbulance>{" "}
            </i>{" "}
            service{" "}
          </Link>
        </div>

        <div className="box">
          <h3>Contact info</h3>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FcCallback></FcCallback>{" "}
            </i>{" "}
            +123-456-7890{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              <FcCellPhone></FcCellPhone>{" "}
            </i>{" "}
            +111-222-3333{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FaEnvelope></FaEnvelope>{" "}
            </i>{" "}
            f.mart@gmail.com{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FcVoicemail></FcVoicemail>
            </i>{" "}
            v.mail@gmail.com{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FcGlobe></FcGlobe>{" "}
            </i>{" "}
            Dhaka, Bangladesh{" "}
          </Link>
        </div>

        <div className="box">
          <h3>Follow us</h3>
          <Link to="/home">
            {" "}
            <i>
              <FaFacebook></FaFacebook>
            </i>{" "}
            facebook{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              <FaTwitter></FaTwitter>
            </i>{" "}
            twitter{" "}
          </Link>

          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FaInstagram></FaInstagram>{" "}
            </i>{" "}
            instagram{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </i>{" "}
            linkedin{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i>
              <FaPinterest></FaPinterest>{" "}
            </i>{" "}
            pinterest{" "}
          </Link>
        </div>
      </div>

      <div className="credit">
        created by <span>Souad Anam Himel</span> | all rights reserved @2021
      </div>
    </section>
  );
};

export default Footer;

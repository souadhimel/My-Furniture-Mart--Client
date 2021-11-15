import React from "react";

import {
  FcEngineering,
  FcOnlineSupport,
  FcProcess,
  FcInTransit,
  FcBullish,
  FcBrokenLink,
  FcCurrencyExchange,
  FcBiotech,
  FcBinoculars,
  FcCollect,
  FcTreeStructure,
  FcOrgUnit,
} from "react-icons/fc";
import "./Speciality.css";

const Speciality = () => {
  return (
    <section style={{ marginTop: 50 }} className="services" id="services">
      <div>
        <h1 className="heading">
          <span>s</span>
          <span>p</span>
          <span>e</span>
          <span>c</span>
          <span>i</span>
          <span>a</span>
          <span>l</span>
          <span>i</span>
          <span>t</span>
          <span>y</span>
        </h1>
      </div>

      <div className="box-container text-center">
        <div className="box">
          <i className="fas fa-hotel">
            <FcEngineering></FcEngineering>
          </i>
          <h3>exclusive design</h3>
          <p>Choose from our huge collections</p>
        </div>
        <div className="box">
          <i className="fas fa-utensils">
            <FcOnlineSupport></FcOnlineSupport>
          </i>
          <h3>Customer Care</h3>
          <p>We are 24/7 open just to improve your lifestyle</p>
        </div>
        <div className="box">
          <i className="fas fa-bullhorn">
            <FcBrokenLink></FcBrokenLink>
          </i>
          <h3>safety guide</h3>
          <p>Safety is the state of being "safe"</p>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia">
            {" "}
            <FcProcess></FcProcess>
          </i>
          <h3>eco friendly</h3>
          <p>we provide eco friendly and bio-degradable products</p>
        </div>
        <div className="box">
          <i className="fas fa-plane">
            <FcInTransit></FcInTransit>
          </i>
          <h3>fastest transit</h3>
          <p>we will reach your product in the shortest time</p>
        </div>
        <div className="box">
          <i className="fas fa-hiking">
            <FcBullish></FcBullish>
          </i>
          <h3>fast growing</h3>
          <p>we are fast grown up in Bangladesh</p>
        </div>
        <div className="box">
          <i className="fas fa-hiking">
            <FcCurrencyExchange></FcCurrencyExchange>
          </i>
          <h3>easy payment</h3>
          <p> Enjoy 0% interest for installment payment. * Conditions Apply</p>
        </div>
        <div className="box">
          <i className="fas fa-hiking">
            <FcBiotech></FcBiotech>
          </i>
          <h3>warranty policy</h3>
          <p>
            1 Year warranty for all furniture (unless otherwise stated). *
            Conditions Apply
          </p>
        </div>
        <div className="box">
          <i className="fas fa-hiking">
            <FcBinoculars></FcBinoculars>
          </i>
          <h3>Assembling</h3>
          <p>
            Our expert team is always ready to assemble your furniture for free!
          </p>
        </div>
        <div className="box">
          <i className="fas fa-hiking">
            <FcCollect></FcCollect>
          </i>
          <h3>shifting</h3>
          <p>We provide you dismantling and re-assembling service.</p>
        </div>
        <div className="box">
          <i className="fas fa-hiking">
            <FcTreeStructure></FcTreeStructure>
          </i>
          <h3>Knockdown</h3>
          <p>You can easily dismantle your furniture.</p>
        </div>
        <div className="box">
          <i className="fas fa-hiking">
            <FcOrgUnit></FcOrgUnit>
          </i>
          <h3>research</h3>
          <p>we are working on our product improvements.</p>
        </div>
      </div>
    </section>
  );
};

export default Speciality;

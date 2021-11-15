import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section className="gallery" id="gallery">
        <h1 className="heading">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>y</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img
              src="https://i.ibb.co/1sM3WdZ/spacejoy-KJUGh-E9ojro-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>drawing Room</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>

          <div className="box">
            <img
              src="https://i.ibb.co/gdXVn5G/francesca-tosolini-w1-RE0l-Bb-REo-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>Bed room</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/s9tnMJS/don-kaveen-NFbwes-e-j-I-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>Dreamy Dining</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/KrHxVRs/deborah-cortelazzi-g-REqu-CUXQLI-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>window view</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/pL6sf3M/sidekix-media-lrk0l9w8r-I0-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the art</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/NmZXxrv/roberto-nickson-fl2my-UOVYz-A-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>work station</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/9wzHN6g/neonbrand-Wp7t4c-WN-68-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the comfort</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/wsY3YQX/nathan-oakley-ud-X-PMG8-PRQ-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the beauty</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/wsY3YQX/nathan-oakley-ud-X-PMG8-PRQ-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the gorgeous</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/Fw3VHzt/kari-shea-AMyjxx-LEHU4-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the posh</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/Bj00y54/spacejoy-IH7w-Psjwomc-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the classy</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/R2VXWf9/nathan-oakley-Re-Wa-WXp-Ln-P8-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the superb</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/JRkQCR7/id-interiors-3-B8t4vnk-Xt0-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the calm</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/HNxVGpZ/alexandra-gorn-JIUjvqe2-ZHg-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the real</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

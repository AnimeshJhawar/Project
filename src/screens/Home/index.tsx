/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../utils/viewport";

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  <strong className="brand-name">
                    Youth & Risk-Taking: Know Your Risk Type?{" "}
                  </strong>
                </h1>
                <h2 className="my-3">
                  IIT Delhi Study on Risk-Taking, Decision Making & Youth{" "}
                </h2>
                <div className="mt-3">
                  <NavLink to="/risk" className="btn-get-started">
                    Let's Get Started!
                  </NavLink>
                </div>
              </div>
              <br />
              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  src="/assets/home/10610.jpg"
                  className="img-fluid animated"
                  alt="home img"
                  width={width}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

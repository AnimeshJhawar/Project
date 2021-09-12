import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-sm navbar-toogleable-sm navbar-light bg-white box-shadow mb-3">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src="/assets/home/download.png"
                    alt="Psyching You"
                    width="300"
                    height="100"
                    className="d-inline-block align-top"
                  />
                  <div className="hidden"> Invisible </div>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto text-center">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        to="/"
                        activeClassName="menu_active"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/about"
                        activeClassName="menu_active"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/contact"
                        activeClassName="menu_active"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

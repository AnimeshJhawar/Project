/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1">Email address*</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=" example@mail.com"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We swear, we'll never ever share your email with anyone.
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1">Your Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your sweet name goes here"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1"> Your Message*</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  required
                  placeholder="Can't wait to listen from you :)"
                />
              </div>
              <div className="mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1">
                  {" "}
                  Check it, Just to double sure!
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

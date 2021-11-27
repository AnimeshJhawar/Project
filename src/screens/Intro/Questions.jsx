import React from "react";

const Questions = (props) => {
  const { option1, option2, option3, option4 } = props;
  return (
    <>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <input
                  type="radiobutton"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1"> {option1}</label>
              </div>
              <div className="mb-3">
                <input
                  type="radiobutton"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1">{option2}</label>
              </div>
              <div className="mb-3">
                <input
                  type="radiobutton"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1"> {option3}</label>
              </div>
              <div className="mb-3">
                <input
                  type="radiobutton"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1"> {option4}</label>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;

/* eslint-disable react/destructuring-assignment */
import React from "react";

const Questions = (props: {
  option1:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  option2:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  option3:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  option4:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
}) => {
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
                <label htmlFor="exampleCheck1"> {props.option1}</label>
              </div>
              <div className="mb-3">
                <input
                  type="radiobutton"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1">{props.option2}</label>
              </div>
              <div className="mb-3">
                <input
                  type="radiobutton"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1"> {props.option3}</label>
              </div>
              <div className="mb-3">
                <input
                  type="radiobutton"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label htmlFor="exampleCheck1"> {props.option4}</label>
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

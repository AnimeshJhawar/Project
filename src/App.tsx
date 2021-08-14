/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { FC } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import { MemoryRouter, Route, useHistory } from "react-router";
import { RiskTaker } from "./screens/RiskTaker";
import { GeneralInstructions } from "./screens/GeneralInstructions";
import { Ask } from "./screens/Ask";
import Surveys from "./screens/Surveys";
import { surveys } from "./data/survey.data";
import { BartInstructions } from "./screens/BartInstructions";
import { BartPractice } from "./screens/BartPractice";
import { Bart } from "./screens/Bart";

const App: FC = () => {
  const history = useHistory();

  if (sessionStorage.getItem("uuid") === null) {
    sessionStorage.setItem("uuid", uuidv4());
  }
  const demographic = () => {
    return <Surveys surveyLink={surveys[0]} next="/details" />;
  };
  const details = () => {
    return <Surveys surveyLink={surveys[1]} next="/bartInstructions" />;
  };
  const activities = () => {
    return <Surveys surveyLink={surveys[2]} next="/" />;
  };
  const routes: { [key: string]: any } = {
    "/": RiskTaker,
    "/ask": Ask,
    "/generalInstructions": GeneralInstructions,
    "/demographic": demographic,
    "/details": details,
    "/bartInstructions": BartInstructions,
    "/bartPractice": BartPractice,
    "/bart": Bart,
    "/activities": activities,
  };

  return (
    <MemoryRouter>
      {Object.keys(routes).map((route) => {
        return <Route exact path={route} component={routes[route]} />;
      })}
    </MemoryRouter>
  );
};

export default App;

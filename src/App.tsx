/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { FC } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import {
  MemoryRouter,
  Route,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import { RiskTaker } from "./screens/RiskTaker";
import { GeneralInstructions } from "./screens/GeneralInstructions";
import { Ask } from "./screens/Ask";
import Surveys from "./screens/Surveys";
import { surveys } from "./data/survey.data";
import { BartInstructions } from "./screens/BartInstructions";
import { BartPractice } from "./screens/BartPractice";
import { Bart } from "./screens/Bart";
import { IOWAInstructions1 } from "./screens/IOWAInstructions1";
import { iowainstructions2 } from "./data/iowainstructions";
import { IOWAPractice } from "./screens/IOWAPractice";
import { IOWA } from "./screens/IOWA";
import { IOWAInstructions2 } from "./screens/IOWAInstructions2";
import { StroopInstructions } from "./screens/StroopInstructions";
import { StroopPractice } from "./screens/StroopPractice";
import { Stroop } from "./screens/Stroop";
import { TOLInstructions1 } from "./screens/TOLInstructions1";
import { TOLInstructions2 } from "./screens/TOLInstructions2";
import { TOLPractice } from "./screens/TOLPractice";
import { TOL } from "./screens/TOL";
import { Demographic } from "./Surveys/Demographic";

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
  const activities1 = () => {
    return <Surveys surveyLink={surveys[2]} next="/iowaInstructions1" />;
  };
  const activities2 = () => {
    return <Surveys surveyLink={surveys[3]} next="/stroopInstructions" />;
  };
  const emotions = () => {
    return <Surveys surveyLink={surveys[3]} next="/impulsivity" />;
  };
  const impulsivity = () => {
    return <Surveys surveyLink={surveys[3]} next="/tolInstructions1" />;
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
    "/activities1": activities1,
    "/iowaInstructions1": IOWAInstructions1,
    "/iowaInstructions2": IOWAInstructions2,
    "/iowaPractice": IOWAPractice,
    "/iowa": IOWA,
    "/actities2": activities2,
    "/stroopInstructions": StroopInstructions,
    "/stroopPractice": StroopPractice,
    "/stroop": Stroop,
    "/emotions": emotions,
    "/impulsivity": impulsivity,
    "/tolInstructions1": TOLInstructions1,
    "/tolInstructions2": TOLInstructions2,
    "/tolPractice": TOLPractice,
    "/tol": TOL,
  };

  return (
    <BrowserRouter basename="/games">
      {Object.keys(routes).map((route) => {
        return (
          <Route key={route} exact path={route} component={routes[route]} />
        );
      })}
    </BrowserRouter>
  );
};

export default App;

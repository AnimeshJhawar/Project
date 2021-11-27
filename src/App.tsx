/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { FC } from "react";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import {
  MemoryRouter,
  Route,
  useHistory,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import { Switch as Toggle } from "antd";
import { RiskTaker } from "./screens/RiskTaker";
import { GeneralInstructions } from "./screens/GeneralInstructions";
import { Ask } from "./screens/Ask";
import Surveys from "./screens/Surveys";
import { surveys as surveysEnglish, surveysHindi } from "./data/survey.data";
import { BartInstructions } from "./screens/BartInstructions";
import { BartPractice } from "./screens/BartPractice";
import { Bart } from "./screens/Bart";
import { IOWAInstructions1 } from "./screens/IOWAInstructions1";
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
import { languageContext } from "./context/languageContext";
import { BartStart } from "./screens/BartStart";
import { Proceed } from "./screens/Proceed";
import { Problem1 } from "./screens/Problem1";
import { Problem2 } from "./screens/Problem2";
import { Problem3 } from "./screens/Problem3";
import About from "./screens/About";
import Contact from "./screens/Contact";
import App1 from "./screens/Intro/App1";

const App: FC = () => {
  const history = useHistory();

  const [surveys, setSurveys] = React.useState(surveysEnglish);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setSurveys(lang === "Hindi" ? surveysHindi : surveysEnglish);
  }, [lang]);

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
    return <Surveys surveyLink={surveys[4]} next="/impulsivity" />;
  };
  const impulsivity = () => {
    return <Surveys surveyLink={surveys[5]} next="/tolInstructions1" />;
  };
  const gritScale = () => {
    return <Surveys surveyLink={surveys[6]} next="/identityScale" />;
  };
  const identityScale = () => {
    return <Surveys surveyLink={surveys[7]} next="/PERMA" />;
  };
  const PERMA = () => {
    return <Surveys surveyLink={surveys[8]} next="/creativity" />;
  };
  const creativity = () => {
    return <Surveys surveyLink={surveys[9]} next="/exit" />;
  };
  const routes: { [key: string]: any } = {
    "/": App1,
    "/home": App1,
    "/contact": Contact,
    "/about": About,
    "/risktaker": RiskTaker,
    "/ask": Ask,
    "/generalInstructions": GeneralInstructions,
    "/demographic": demographic,
    "/details": details,
    "/bartInstructions": BartInstructions,
    "/bartStart": BartStart,
    "/bartPractice": BartPractice,
    "/bart": Bart,
    "/activities1": activities1,
    "/iowaInstructions1": IOWAInstructions1,
    "/iowaInstructions2": IOWAInstructions2,
    "/iowaPractice": IOWAPractice,
    "/iowa": IOWA,
    "/activities2": activities2,
    "/stroopInstructions": StroopInstructions,
    "/stroopPractice": StroopPractice,
    "/stroop": Stroop,
    "/emotions": emotions,
    "/impulsivity": impulsivity,
    "/tolInstructions1": TOLInstructions1,
    "/tolInstructions2": TOLInstructions2,
    "/tolPractice": TOLPractice,
    "/tol": TOL,
    "/problem1": Problem1,
    "/problem2": Problem2,
    "/problem3": Problem3,
    "/moreSurveys": Proceed,
    "/gritScale": gritScale,
    "/identityScale": identityScale,
    "/PERMA": PERMA,
    "/creativity": creativity,
  };

  const { setLanguage } = React.useContext(languageContext);

  function onChange(checked: any) {
    setLanguage(checked ? "Hindi" : "English");
  }

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Toggle
        checkedChildren="Hindi"
        unCheckedChildren="English"
        onChange={onChange}
      />
      <Switch>
        {Object.keys(routes).map((route) => {
          return (
            <Route key={route} exact path={route} component={routes[route]} />
          );
        })}
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;

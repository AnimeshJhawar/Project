/* eslint-disable no-unused-vars */
import { ConsoleSqlOutlined } from "@ant-design/icons";
import React, { useState, useEffect, ReactNode } from "react";
import { surveys } from "../../data/survey.data";
import { FirebaseContext } from "../../firebase";
import { Bart } from "../Bart";
import { IOWA } from "../IOWA";
import { Stroop } from "../Stroop";
import Surveys from "../Surveys";
import { TOL } from "../TOL";
import styles from "./style.module.css";

export interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  const firebase = React.useContext(FirebaseContext);
  const user = firebase?.firebase.auth().currentUser;
  const firestore = firebase?.firebase.firestore();

  // if (firebase?.firebase.auth().currentUser === null) {
  //   firebase?.firebase
  //     .auth()
  //     .signInAnonymously()
  //     .then(() => {
  //       console.log("signed in");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // ...
  //     });
  // }
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [surveyIndex, setSurveyIndex] = useState(0);
  const [showSurvey, setShowSurvey] = useState(true);

  const [gamesList, setGamesList] = useState<ReactNode[]>([
    <Bart
      onNext={() => {
        setSurveyIndex(2);
        setShowSurvey(true);
      }}
    />,
    <IOWA
      onNext={() => {
        setSurveyIndex(3);
        setShowSurvey(true);
      }}
    />,
    <Stroop
      onNext={() => {
        setSurveyIndex(4);
        setShowSurvey(true);
      }}
    />,
    <TOL onNext={() => {}} />,
  ]);

  const [surveysList, setSurveysList] = useState<ReactNode[]>([]);

  useEffect(() => {
    // Shuffle survey list and gameslist here using their hooks
    setSurveysList([
      ...surveys.map((link, index) => (
        <Surveys
          key={index.toString()}
          surveyLink={link}
          onNext={() => {
            if (index === 0) {
              setSurveyIndex(1);
            } else if (index === 1) {
              setCurrentIndex(0);
              setShowSurvey(false);
            } else if (index === 2) {
              setCurrentIndex(1);
              setShowSurvey(false);
            } else if (index === 3) {
              setCurrentIndex(2);
              setShowSurvey(false);
            } else if (index === 4) {
              setSurveyIndex(5);
            } else if (index === 5) {
              setCurrentIndex(3);
              setShowSurvey(false);
            }
          }}
        />
      )),
    ]);
  }, []);

  return (
    <div className={styles.mainContainer}>
      {showSurvey ? surveysList[surveyIndex] : gamesList[currentIndex]}
    </div>
  );
};

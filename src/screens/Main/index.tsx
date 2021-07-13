/* eslint-disable no-unused-vars */
import React, { useState, useEffect, ReactNode } from "react";
import { surveys } from "../../data/survey.data";
import { Bart } from "../Bart";
import { IOWA } from "../IOWA";
import { Stroop } from "../Stroop";
import Surveys from "../Surveys";
import { TOL } from "../TOL";
import styles from "./style.module.css";

export interface MainProps {}

export const Main: React.FC<MainProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [surveyIndex, setSurveyIndex] = useState(0);
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    const parsedIndex = Number(sessionStorage.getItem("currentIndex") || 0);
    setCurrentIndex(parsedIndex);
    const parsedSurveyIndex = Number(
      sessionStorage.getItem("surveyIndex") || 0
    );
    setSurveyIndex(parsedSurveyIndex);
  }, []);

  useEffect(() => {
    return sessionStorage.setItem("currentIndex", currentIndex.toString());
  }, [currentIndex]);

  useEffect(() => {
    return sessionStorage.setItem("surveyIndex", currentIndex.toString());
  }, [surveyIndex]);

  function onNext() {
    setSurveyIndex(surveyIndex + 1);
    setShowSurvey(true);
  }

  const [gamesList, setGamesList] = useState<ReactNode[]>([
    <Bart
      onNext={() => {
        setSurveyIndex(0);
        setShowSurvey(true);
      }}
    />,
    <IOWA
      onNext={() => {
        setSurveyIndex(1);
        setShowSurvey(true);
      }}
    />,
    <Stroop
      onNext={() => {
        setSurveyIndex(1);
        setShowSurvey(true);
      }}
    />,
    <TOL onNext={() => {}} />,
  ]);

  function surveyNext() {
    setCurrentIndex(currentIndex + 1);
    setShowSurvey(false);
  }

  const [surveysList, setSurveysList] = useState<ReactNode[]>([]);

  useEffect(() => {
    // Shuffle survey list and gameslist here using their hooks
    setSurveysList([
      ...surveys.map((link, index) => (
        <Surveys
          key={index.toString()}
          surveyLink={link}
          onNext={() => {
            setCurrentIndex(index + 1);
            setShowSurvey(false);
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

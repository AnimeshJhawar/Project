import React from "react";
import Iframe from "react-iframe";
import { CustomButton } from "../../components/CustomButton";
import { iframeScreen } from "../../data/survey.data";
import styles from "./style.module.css";

export interface SurveysProps {
  surveyLink: string;
  onNext: Function;
}

export const Surveys: React.FC<SurveysProps> = ({ surveyLink, onNext }) => {
  return (
    <div className={styles.iframeContainer}>
      <Iframe
        className={styles.surveysIframe}
        url={surveyLink}
        allowFullScreen
      />
      <br />
      <CustomButton
        style={{
          position: "absolute",
          width: "80%",
          left: "10%",
          bottom: "10px",
        }}
        text={iframeScreen.buttonText}
        onClick={onNext}
        block
      />
    </div>
  );
};
export default Surveys;

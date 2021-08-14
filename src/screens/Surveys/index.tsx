import React from "react";
import { useHistory } from "react-router";
import Iframe from "react-iframe";
import { CustomButton } from "../../components/CustomButton";
import { iframeScreen } from "../../data/survey.data";
import styles from "./style.module.css";

export interface SurveysProps {
  surveyLink: string;
  next: string;
}

export const Surveys: React.FC<SurveysProps> = ({ surveyLink, next }) => {
  const history = useHistory();

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
        onClick={() => history.push(next)}
        block
      />
    </div>
  );
};
export default Surveys;

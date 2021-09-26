/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import { message } from "antd";
import { CustomButton } from "../../components/CustomButton";
import {
  iframeScreen as English,
  iframeScreenHindi as Hindi,
} from "../../data/survey.data";
import styles from "./style.module.css";
import { languageContext } from "../../context/languageContext";

export interface SurveysProps {
  surveyLink: string;
  next: string;
}

export const Surveys: React.FC<SurveysProps> = ({ surveyLink, next }) => {
  const history = useHistory();
  const [filled, setFilled] = useState(false);
  const [formRef, setFormRef] = useState<HTMLDivElement | null>(null);
  function runScript(reference: any) {
    if (reference == null) return;
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = surveyLink;
    reference.appendChild(script);
  }

  const [surveyFormData, setSurveyFormData] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setSurveyFormData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  function formCheck() {
    if (!formRef?.innerText.includes(surveyFormData.checkStr)) {
      message.info("Please fill the survey!");
    } else {
      history.push(next);
    }
  }

  return (
    <div className={styles.container}>
      <p>
        Copy-Paste the following code in the subject id field of survey:
        <b> {sessionStorage.getItem("uuid")}</b>
      </p>
      <div
        id="ff-compose"
        ref={(r) => {
          setFormRef(r);
          runScript(r);
        }}
        className={styles.form}
      >
        Loading Survey...
      </div>
      <br />
      <CustomButton
        style={{
          width: "80%",
          left: "10%",
          marginBottom: "20px",
        }}
        text={surveyFormData.buttonText}
        onClick={formCheck}
        block
      />
    </div>
  );
};
export default Surveys;

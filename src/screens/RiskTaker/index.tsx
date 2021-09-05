/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";
import {
  risktakerData as English,
  risktakerDataHindi as Hindi,
} from "../../data/risktaker";
import { CustomButton } from "../../components/CustomButton";
import { languageContext } from "../../context/languageContext";

export const RiskTaker: React.FC = () => {
  const history = useHistory();

  const [risktakerData, setRiskTakerData] = useState(English);
  const { lang } = React.useContext(languageContext);

  useEffect(() => {
    setRiskTakerData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}> {risktakerData.heading} </div>
      {risktakerData.para.map((p) => {
        return <p> {p} </p>;
      })}
      <CustomButton
        text={risktakerData.buttonText}
        onClick={() => history.push("/ask")}
      />
    </div>
  );
};

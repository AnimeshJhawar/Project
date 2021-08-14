/* eslint-disable import/prefer-default-export */
import React from "react";
import styles from "./style.module.css";
import { risktakerData } from "../../data/risktaker";
import { CustomButton } from "../../components/CustomButton";

export const RiskTaker: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}> {risktakerData.heading} </div>
      {risktakerData.para.map((p) => {
        return <p> {p} </p>;
      })}
      <CustomButton text={risktakerData.buttonText} />
    </div>
  );
};

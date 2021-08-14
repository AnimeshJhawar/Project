/* eslint-disable import/prefer-default-export */
import React from "react";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import { bartInstructionsData } from "../../data/bartInstructions";

export const BartInstructions: React.FC = () => {
  return (
    <div className={styles.container}>
      {bartInstructionsData.points.map((p) => {
        return <p> {p} </p>;
      })}
      <CustomButton text={bartInstructionsData.next} />
    </div>
  );
};

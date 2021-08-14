/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import { iowainstructions1 } from "../../data/iowainstructions";

export const IOWAInstructions1: React.FC = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src="/assets/iowa/iowapractice1.png"
          width="100%"
          alt="screen shot of iowa"
        />
      </div>

      <p> {iowainstructions1.text} </p>

      <br />
      <p>{iowainstructions1.clicktext}</p>
      <div className={styles.buttons}>
        <CustomButton
          text={iowainstructions1.next}
          onClick={() => history.push("/generalInstructions")}
        />
      </div>
    </div>
  );
};

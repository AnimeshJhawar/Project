/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import { tolInstructions1 } from "../../data/tolInstructions";

export const TOLInstructions1: React.FC = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="/assets/tol.png" width="100%" alt="screen shot of tol" />
      </div>

      <p> {tolInstructions1.text} </p>
      <br />
      <CustomButton
        text={tolInstructions1.next}
        onClick={() => history.push("/TOLInstructions2")}
        block
      />
    </div>
  );
};

/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import { tolInstructions2 } from "../../data/tolInstructions";

export const TOLInstructions2: React.FC = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      {tolInstructions2.points.map((p) => {
        return <p> {p} </p>;
      })}
      <br />
      <div className={styles.buttons}>
        <CustomButton
          text={tolInstructions2.prev}
          onClick={() => history.push("/tolInstructions1")}
        />
        <CustomButton
          text={tolInstructions2.next}
          onClick={() => history.push("/tolPractice")}
        />
      </div>
    </div>
  );
};

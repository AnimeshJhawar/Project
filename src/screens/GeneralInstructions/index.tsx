/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import { generalInstructionsData } from "../../data/generalInstructions";

export const GeneralInstructions: React.FC = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <ul>
        {generalInstructionsData.points.map((p) => {
          return (
            <li>
              <p> {p} </p>
            </li>
          );
        })}
      </ul>
      <i>{generalInstructionsData.click}</i>
      <CustomButton
        text={generalInstructionsData.next}
        onClick={() => history.push("/demographic")}
      />
    </div>
  );
};

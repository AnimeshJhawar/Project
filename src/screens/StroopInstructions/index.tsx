/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import { stroopInstructions } from "../../data/stroopInstructions";

export const StroopInstructions: React.FC = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <p>{stroopInstructions.intro}</p>
      <p style={{ color: stroopInstructions.example[1] }}>
        {stroopInstructions.example[0]}
      </p>
      <p> {stroopInstructions.similar}</p>
      <ul>
        {stroopInstructions.examples.map((e) => {
          return (
            <li>
              <p>
                <span style={{ color: e[1] }}>{e[0]} </span>
                ---- {e[2]}
              </p>
            </li>
          );
        })}
      </ul>
      <p>{stroopInstructions.final}</p>

      <CustomButton
        text={stroopInstructions.button}
        onClick={() => history.push("/stroopPractice")}
      />
    </div>
  );
};

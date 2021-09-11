/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import {
  bartStartData as English,
  bartStartDataHindi as Hindi,
} from "../../data/bartStart";
import { languageContext } from "../../context/languageContext";

export const BartStart: React.FC = () => {
  const history = useHistory();
  const [bartStartData, setBartStartData] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setBartStartData(lang === "Hindi" ? Hindi : English);
  }, [lang]);
  return (
    <div className={styles.container}>
      <p className={styles.heading}> {bartStartData.heading} </p>
      <p>{bartStartData.rem}</p>
      <ul>
        {bartStartData.points.map((p) => {
          return (
            <li>
              <p> {p} </p>
            </li>
          );
        })}
      </ul>

      <CustomButton
        text={bartStartData.next}
        onClick={() => history.push("/bartPractice")}
        className={styles.button}
      />
    </div>
  );
};

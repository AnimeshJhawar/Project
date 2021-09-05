/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import {
  generalInstructionsData as English,
  generalInstructionsDataHindi as Hindi,
} from "../../data/generalInstructions";
import { languageContext } from "../../context/languageContext";

export const GeneralInstructions: React.FC = () => {
  const history = useHistory();

  const [generalInstructionsData, setInstructionsData] =
    React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setInstructionsData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

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

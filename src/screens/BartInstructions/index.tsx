/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import {
  bartInstructionsData as English,
  bartInstructionsDataHindi as Hindi,
} from "../../data/bartInstructions";
import { languageContext } from "../../context/languageContext";

export const BartInstructions: React.FC = () => {
  const history = useHistory();
  const [bartInstructions, setbartInstructions] = React.useState(English);
  const { lang } = React.useContext(languageContext);
  React.useEffect(() => {
    setbartInstructions(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  return (
    <div className={styles.container}>
      {bartInstructions.task}
      {bartInstructions.points.map((p) => {
        return <p> {p} </p>;
      })}
      <CustomButton
        text={bartInstructions.next}
        onClick={() => history.push("/bartStart")}
      />
    </div>
  );
};

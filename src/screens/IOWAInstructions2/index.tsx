/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import {
  iowainstructions2 as English,
  iowainstructions2Hindi as Hindi,
} from "../../data/iowainstructions";
import { languageContext } from "../../context/languageContext";

export const IOWAInstructions2: React.FC = () => {
  const history = useHistory();

  const [iowainstructions2, setIowaInstructions2] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setIowaInstructions2(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  return (
    <div className={styles.container}>
      {iowainstructions2.points.map((p) => {
        return <p> {p} </p>;
      })}
      <p>{iowainstructions2.if}</p>
      <div className={styles.buttons}>
        <CustomButton
          text={iowainstructions2.prev}
          onClick={() => history.push("/iowaInstructions1")}
        />
        <CustomButton
          text={iowainstructions2.next}
          onClick={() => history.push("/iowaPractice")}
        />
      </div>
    </div>
  );
};

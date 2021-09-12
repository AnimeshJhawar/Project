/* eslint-disable import/prefer-default-export */
import React from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import {
  iowainstructions1 as English,
  iowainstructions1Hindi as Hindi,
} from "../../data/iowainstructions";
import { languageContext } from "../../context/languageContext";

export const IOWAInstructions1: React.FC = () => {
  const history = useHistory();
  const [iowainstructions1, setIowaInstructions1] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setIowaInstructions1(lang === "Hindi" ? Hindi : English);
  }, [lang]);
  return (
    <div className={styles.container}>
      TASK 2
      <div className={styles.img}>
        <img
          src="/assets/iowa/iowapractice1.png"
          width="100%"
          alt="screen shot of iowa"
        />
      </div>
      <p> {iowainstructions1.text} </p>
      <br />
      <CustomButton
        text={iowainstructions1.next}
        onClick={() => history.push("/iowaInstructions2")}
      />
    </div>
  );
};

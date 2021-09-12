/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { Radio } from "antd";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import {
  problem3 as English,
  problem3Hindi as Hindi,
} from "../../data/problem3";
import { CustomButton } from "../../components/CustomButton";
import { languageContext } from "../../context/languageContext";
import { FirebaseContext } from "../../firebase";

export const Problem3: React.FC = () => {
  const history = useHistory();
  const [value, setValue] = React.useState(-1);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const [problemData, setProblemData] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setProblemData(lang === "Hindi" ? Hindi : English);
  }, [lang]);
  const [startTime, setStartTime] = React.useState(0);
  React.useEffect(() => {
    setProblemData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  React.useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();
  return (
    <div className={styles.container}>
      <p> {problemData.name} </p>
      <p> {problemData.question} </p>

      <div className={styles.radioButtons}>
        <Radio.Group onChange={onChange} value={value} className={styles.radio}>
          {problemData.options.map((option, index) => (
            <Radio value={index}>{option}</Radio>
          ))}
        </Radio.Group>
      </div>
      <br />
      <div className={styles.buttons}>
        <CustomButton
          text={problemData.next}
          disabled={value === -1}
          onClick={() => {
            firestore
              ?.collection("Games")
              .doc("Problem3")
              .collection(sessionStorage.getItem("uuid")!)
              .doc("Answere")
              .set({
                id: sessionStorage.getItem("uuid"),
                answere: value,
                timeTaken: Date.now() - startTime,
              })
              .then(() => {
                // console.log("Document written");
              })
              .catch((error) => {
                // console.error("Error adding document: ", error);
              });
            history.push("/moreSurveys");
          }}
        />
      </div>
    </div>
  );
};

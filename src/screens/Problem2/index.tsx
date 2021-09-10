/* eslint-disable import/prefer-default-export */
import React from "react";
import { Radio } from "antd";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import {
  problem2 as English,
  problem2Hindi as Hindi,
} from "../../data/problem2";
import { CustomButton } from "../../components/CustomButton";
import { languageContext } from "../../context/languageContext";

export const Problem2: React.FC = () => {
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
            history.push("/generalInstructions");
          }}
        />
      </div>
    </div>
  );
};

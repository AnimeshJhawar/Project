/* eslint-disable import/prefer-default-export */
import React from "react";
import { Radio } from "antd";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import {
  agreeData as English,
  agreeDataHindi as Hindi,
} from "../../data/agree";
import { CustomButton } from "../../components/CustomButton";
import { languageContext } from "../../context/languageContext";

export const Ask: React.FC = () => {
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const [agreeData, setAgreeData] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setAgreeData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  return (
    <div className={styles.container}>
      <p>{agreeData.ackn}</p>
      <p> {agreeData.advice} </p>
      <div className={styles.radioButtons}>
        <Radio.Group onChange={onChange} value={value} className={styles.radio}>
          <Radio value={1}>{agreeData.agree}</Radio>
          <Radio value={2}>{agreeData.no}</Radio>
        </Radio.Group>
      </div>
      <br />
      <p>{agreeData.instruction}</p>
      <div className={styles.buttons}>
        <CustomButton text={agreeData.prev} onClick={() => history.push("/")} />
        <CustomButton
          text={agreeData.next}
          disabled={value !== 1}
          onClick={() => history.push("/generalInstructions")}
        />
      </div>
    </div>
  );
};

/* eslint-disable import/prefer-default-export */
import React from "react";
import { Radio } from "antd";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { agreeData } from "../../data/agree";
import { CustomButton } from "../../components/CustomButton";

export const Ask: React.FC = () => {
  const history = useHistory();
  const [value, setValue] = React.useState(1);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <p>
        <i> {agreeData.ackn}</i>
      </p>
      <p> {agreeData.advice} </p>
      <div className={styles.radioButtons}>
        <Radio.Group onChange={onChange} value={value}>
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
          onClick={() => history.push("/generalInstructions")}
        />
      </div>
    </div>
  );
};

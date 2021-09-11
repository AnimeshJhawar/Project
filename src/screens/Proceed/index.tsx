/* eslint-disable import/prefer-default-export */
import React from "react";
import { Radio } from "antd";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import {
  proceedData as English,
  proceedDataHindi as Hindi,
} from "../../data/proceed";
import { CustomButton } from "../../components/CustomButton";
import { languageContext } from "../../context/languageContext";

export const Proceed: React.FC = () => {
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const [proceedData, setproceedData] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    setproceedData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  return (
    <div className={styles.container}>
      <p>{proceedData.wish}</p>
      <div className={styles.radioButtons}>
        <Radio.Group onChange={onChange} value={value} className={styles.radio}>
          <Radio value={1}>{proceedData.proceed}</Radio>
          <Radio value={2}>{proceedData.no}</Radio>
        </Radio.Group>
      </div>
      <br />
      <div className={styles.buttons}>
        <CustomButton
          text={proceedData.exit}
          onClick={() => history.push("/exit")}
        />
        <CustomButton
          text={proceedData.next}
          disabled={value !== 1}
          onClick={() => history.push("/gritSCale")}
        />
      </div>
    </div>
  );
};

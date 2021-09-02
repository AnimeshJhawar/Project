/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { useHistory } from "react-router";
import { CustomButton } from "../../components/CustomButton";
import { iframeScreen } from "../../data/survey.data";
import styles from "./style.module.css";

export const Demographic: React.FC = () => {
  const history = useHistory();
  const [disabled, setDisbaled] = useState(true);

  function runScript(reference: any) {
    if (reference == null) return;
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src =
      "https://formfacade.com/include/118024647094610445616/form/1FAIpQLSfLPfHYKBTETf-q-1nl5-clNCFYESPp5ibXWUbPAJEH5oOcqQ/classic.js?div=ff-compose";
    reference.appendChild(script);
  }
  return (
    <div className={styles.container}>
      <div id="ff-compose" ref={(r) => runScript(r)}>
        {" "}
      </div>{" "}
      <br />
      <CustomButton
        style={{
          width: "80%",
          left: "10%",
        }}
        text={iframeScreen.buttonText}
        onClick={() => history.push("/")}
        block
        disabled={disabled}
      />
    </div>
  );
};

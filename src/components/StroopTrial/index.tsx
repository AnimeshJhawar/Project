/* eslint-disable no-unused-vars */
import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import { stroopData } from "../../data/stroop";
import { CustomButton } from "../CustomButton";
import { StroopText } from "../StroopText";
import styles from "./style.module.css";

export interface StroopTrialProps {
  stroopTrial: { text: string; ink: string; inkKey: string };
  result: Function;
  startTime?: number;
}

export const StroopTrial: React.FC<StroopTrialProps> = ({
  stroopTrial,
  result = () => null,
  startTime = Date.now(),
}) => {
  const { text, ink, inkKey } = stroopTrial;
  const [show, setShow] = useState(Date.now() - startTime > 500);
  const trialRef = useRef<HTMLDivElement>(null);
  const [correct, setCorrect] = useState(false);
  const [pressed, setPressed] = useState(false);

  function handelKeyPress(event: KeyboardEvent) {
    if (
      stroopData.keys.some((key) => event.key.toString().toLowerCase() === key)
    ) {
      if (inkKey === event.key.toString().toLowerCase()) {
        setCorrect(true);
      }

      setPressed(true);
    }
  }

  const handelOnScreenKeys = (val: string) => {
    if (inkKey === val.toLowerCase()) {
      setCorrect(true);
    }
    setPressed(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, stroopData.bufferTime);

    if (document.hasFocus() !== true) {
      window.focus();
    }

    document.addEventListener("keydown", handelKeyPress);

    setTimeout(() => {
      setPressed(true);
    }, stroopData.trialLength);

    return () => {
      document.removeEventListener("keydown", handelKeyPress);
    };
  }, []);

  useEffect(() => {
    if (pressed) {
      result({ result: correct, time: Date.now() - startTime });
    }
  }, [pressed]);

  return (
    <div className={styles.trialContainer} ref={trialRef}>
      {show ? (
        <>
          <StroopText text={text} ink={ink} />
          <div className={styles.buttonGroup}>
            {stroopData.keys.map((key) => (
              <CustomButton
                key={key}
                isSecondary
                text={key}
                onClick={() => handelOnScreenKeys(key)}
                style={{
                  margin: "10px",
                  padding: "15px",
                  border: "1px solid black",
                  borderRadius: "4px",
                  color: "black",
                  fontSize: "30px",
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <PlusOutlined style={{ fontSize: "28px", justifySelf: "flex-start" }} />
      )}
    </div>
  );
};

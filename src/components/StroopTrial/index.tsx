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
}

export const StroopTrial: React.FC<StroopTrialProps> = ({
  stroopTrial,
  result = () => null,
}) => {
  const { text, ink, inkKey } = stroopTrial;
  const [show, setShow] = useState(false);
  const trialRef = useRef<HTMLDivElement>(null);
  const [correct, setCorrect] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [onScreenKey, setOnScreenKey] = useState<string>("");

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
      result({ result: correct, time: 0 });
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
                isSecondary
                text={key}
                onClick={() => handelOnScreenKeys(key)}
                style={{
                  margin: "10px",
                  border: "1px solid black",
                  borderRadius: "4px",
                  color: "black",
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <PlusOutlined style={{ fontSize: "28px" }} />
      )}
    </div>
  );
};

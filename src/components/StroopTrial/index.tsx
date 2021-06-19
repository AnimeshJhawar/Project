/* eslint-disable no-unused-vars */
import { PlusOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import { stroopData } from "../../data/stroop";
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

  const handelKeyPress = (event: KeyboardEvent) => {
    if (
      stroopData.keys.some((key) => event.key.toString().toLowerCase() === key)
    ) {
      if (inkKey === event.key.toString().toLowerCase()) {
        result({ result: true, time: 0 });
      }
    }
    event.preventDefault();
  };

  useEffect(() => {
    if (document.hasFocus() !== true) {
      window.focus();
    }
    document.addEventListener("keydown", (event) => handelKeyPress(event));
    return document.removeEventListener("keydown", (event) =>
      handelKeyPress(event)
    );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  });

  useEffect(() => {
    setTimeout(() => {
      result({ result: false, time: 0 });
    }, stroopData.trialLength);
  }, [show]);

  useEffect(() => {
    if (trialRef.current !== null && show) {
      trialRef.current.focus();
    }
  });

  return (
    <div className={styles.trialContainer} ref={trialRef}>
      {show ? (
        <StroopText text={text} ink={ink} />
      ) : (
        <PlusOutlined style={{ fontSize: "28px" }} />
      )}
    </div>
  );
};

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { stroopData, gameData } from "../../data/stroop";
import { StroopCard, StroopCardProps } from "../StroopCard";
import { StroopText } from "../StroopText";
import { StroopTrial } from "../StroopTrial";
import styles from "./style.module.css";

const { countdown, countDownColor } = stroopData;

export interface StroopGameProps {}

export const StroopGame: React.FC<StroopCardProps> = () => {
  const [counter, setCounter] = useState(countdown);
  const [dataIndex, setDataIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handeltrial = (data: { result: boolean; time: number }) => {
    setToggle(true);
    setCorrect(data.result);

    setTimeout(() => {
      if (dataIndex < gameData.length - 1) {
        setDataIndex(dataIndex + 1);
        setToggle(false);
      }
    }, 1000);
  };

  const trials = gameData.map((data) => (
    <StroopTrial
      result={(e: { result: boolean; time: number }) => {
        handeltrial(e);
      }}
      stroopTrial={{
        ...data,
      }}
    />
  ));

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setStart(true);
    }
  }, [counter]);

  return (
    <div className={styles.stroopGameContainer}>
      {counter > 0 ? (
        <StroopText text={`Starting in ${counter} sec.`} ink={countDownColor} />
      ) : (
        <>
          {toggle ? (
            <StroopCard correct={correct} />
          ) : (
            trials[dataIndex]
            // <StroopTrial
            //   result={(e: { result: boolean; time: number }) => {
            //     handeltrial(e);
            //   }}
            //   stroopTrial={{
            //     ...gameData[dataIndex],
            //   }}
            // />
          )}
        </>
      )}
    </div>
  );
};

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
  // eslint-disable-next-line prefer-const

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
            <StroopTrial
              result={handeltrial}
              stroopTrial={{
                ...gameData[dataIndex],
              }}
              key={dataIndex.toString()}
            />
          )}
        </>
      )}
    </div>
  );
};

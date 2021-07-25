/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { animated, useTransition } from "react-spring";
import { stroopData, gameData } from "../../data/stroop";
import { StroopCard, StroopCardProps } from "../StroopCard";
import { StroopText } from "../StroopText";
import { StroopTrial } from "../StroopTrial";
import styles from "./style.module.css";
import { CustomButton } from "../CustomButton";
import { FirebaseContext } from "../../firebase";

const { countdown, countDownColor } = stroopData;

export interface StroopGameProps {
  onEnd: Function;
}

export const StroopGame: React.FC<StroopGameProps> = ({ onEnd }) => {
  const [counter, setCounter] = useState(countdown);
  const [dataIndex, setDataIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [results, setResults] = useState<
    { index: number; result: boolean; time: number }[]
  >([]);
  const [end, setEnd] = useState(false);
  // eslint-disable-next-line prefer-const
  let incorrectTrials = 0;
  let correctTrials = 0;
  let incorrectTotal = 0;
  let correctTotal = 0;

  const analysis = () => {
    results.map((trial) => {
      if (trial.result) {
        correctTrials += 1;
        correctTotal += trial.time;
      } else {
        incorrectTrials += 1;
        incorrectTotal += trial.time;
      }
      return 0;
    });
  };

  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();

  // eslint-disable-next-line prefer-const
  const handeltrial = (data: { result: boolean; time: number }) => {
    firestore
      ?.collection("Games")
      .doc("Stroop")
      .collection("userID")
      .doc((dataIndex + 1).toString())
      .set({
        id: "userID",
        trialCount: (dataIndex + 1).toString(),
        color: gameData[dataIndex].ink,
        word: gameData[dataIndex].text,
        correct: data.result,
        timestamp: Date.now(),
      })
      .then(() => {
        console.log("Document written");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    setToggle(true);
    setResults([...results, { ...data, index: dataIndex }]);
    setCorrect(data.result);
    setTimeout(() => {
      if (dataIndex < gameData.length - 1) {
        setDataIndex(dataIndex + 1);
        setToggle(false);
      } else {
        setEnd(true);
      }
    }, stroopData.trialResult);
  };

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  const endTransition = useTransition(end, {
    from: { x: 0, y: -800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -800, opacity: 0 },
  });

  return (
    <div className={styles.stroopGameContainer}>
      {endTransition((transition, show) =>
        show ? (
          <animated.div style={transition}>
            <Card title="Result" bordered={false} style={{ width: 300 }}>
              <p>Analysed Data here</p>
              <p>Analysed Data</p>
              <CustomButton text="Click here to continue" onClick={onEnd} />
            </Card>
          </animated.div>
        ) : (
          <animated.div style={transition}>
            {counter > 0 ? (
              <StroopText
                text={`Starting in ${counter} sec.`}
                ink={countDownColor}
              />
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
                    startTime={Date.now()}
                  />
                )}
              </>
            )}
          </animated.div>
        )
      )}
    </div>
  );
};

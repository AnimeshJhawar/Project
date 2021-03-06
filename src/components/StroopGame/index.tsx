/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { animated, useTransition } from "react-spring";
import { isMobile, osName } from "react-device-detect";
import {
  stroopData as English,
  stroopDataHindi as Hindi,
  gameData,
  practiceGameData,
} from "../../data/stroop";
import { StroopCard, StroopCardProps } from "../StroopCard";
import { StroopText } from "../StroopText";
import { StroopTrial } from "../StroopTrial";
import styles from "./style.module.css";
import { CustomButton } from "../CustomButton";
import { FirebaseContext } from "../../firebase";
import { languageContext } from "../../context/languageContext";

const { countdown, countDownColor } = English;

export interface StroopGameProps {
  onEnd: Function;
  practice?: boolean;
}

export const StroopGame: React.FC<StroopGameProps> = ({
  onEnd,
  practice = false,
}) => {
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
  const game = practice ? practiceGameData : gameData;

  const [stroopData, setstroopData] = useState(English);
  const { lang } = React.useContext(languageContext);

  useEffect(() => {
    setstroopData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

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

  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // eslint-disable-next-line prefer-const
  const handeltrial = (data: {
    result: boolean;
    time: number;
    response: string;
  }) => {
    firestore
      ?.collection("Games")
      .doc("Stroop")
      .collection(sessionStorage.getItem("uuid")!)
      .doc((dataIndex + 1).toString())
      .set({
        subjectid: sessionStorage.getItem("uuid"),
        device: isMobile ? "Mobile" : "Not Mobile",
        starttime: startTime,
        trialnumber: (dataIndex + 1).toString(),
        color: game[dataIndex].ink,
        stimulusitem: game[dataIndex].text,
        correct: data.result,
        endtime: Date.now(),
        osname: osName,
        response: data.response,
      })
      .then(() => {
        // console.log("Document written");
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
      });

    setToggle(true);
    setResults([...results, { ...data, index: dataIndex }]);
    setCorrect(data.result);
    setTimeout(() => {
      if (dataIndex < game.length - 1) {
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
            {/* {practice ? (
              <>
                <p style={{ alignSelf: "center" }}>{stroopData.complete}</p>
                <br />
                <br />
              </>
            ) : (
              ""
            )} */}
            <CustomButton
              text={practice ? stroopData.practuceEnd : stroopData.end}
              onClick={onEnd}
              className={styles.font}
              block
            />
          </animated.div>
        ) : (
          <animated.div style={transition}>
            {counter > 0 ? (
              <>
                <StroopText text={counter.toString()} ink={countDownColor} />
              </>
            ) : (
              <>
                {toggle ? (
                  <StroopCard correct={correct} />
                ) : (
                  <StroopTrial
                    result={handeltrial}
                    stroopTrial={{
                      ...game[dataIndex],
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

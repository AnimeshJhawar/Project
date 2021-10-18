/* eslint-disable no-unused-vars */
import { message } from "antd";
import React, { useState, useEffect, ReactNode } from "react";
import { useHistory } from "react-router";
import { animated, useTransition } from "react-spring";
import { isMobile, osName } from "react-device-detect";
import { CustomButton } from "../../components/CustomButton";
import { TOLStack } from "../../components/TOLStack";
import {
  tolData as English,
  tolDataHindi as Hindi,
  trials,
} from "../../data/TOL";
import { FirebaseContext } from "../../firebase";
import styles from "./style.module.css";
import { languageContext } from "../../context/languageContext";

export interface TOLProps {}

export const TOL: React.FC<TOLProps> = () => {
  const history = useHistory();
  const [end, setEnd] = useState(false);
  const start = true;
  const [trialList, setTrialList] = useState<ReactNode[]>([]);
  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();
  const [tolIndex, setTolIndex] = useState(0);
  const startTime = Date.now();

  const [tolData, settolData] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    settolData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  function onResultCallback(
    result: boolean,
    dropsUsed: number,
    stackIndex: number,
    lastdropsource: number,
    lastdroptarget: number,
    lastdroplatency: number,
    movestring: string,
    firstmovetime: number
  ) {
    if (stackIndex < trials.length) {
      if (result) {
        message.info("Trial Completed!");
      } else {
        message.info("You failed the trial.");
      }

      firestore
        ?.collection("Games")
        .doc("TOL")
        .collection(sessionStorage.getItem("uuid")!)
        .doc(stackIndex.toString())
        .set({
          subjectid: sessionStorage.getItem("uuid"),
          device: isMobile ? "Mobile" : "Not Mobile",
          starttime: startTime,
          trialnumber: stackIndex,
          targetachieved: result,
          subjectattempts: dropsUsed,
          lastdropsource,
          lastdroptarget,
          lastdroplatency,
          endtime: Date.now(),
          movestring,
          firstmovetime,
          osname: osName,
        })
        .then(() => {
          console.log(`Document written: ${sessionStorage.getItem("uuid")!}`);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
    if (stackIndex < trials.length - 1) {
      setTolIndex(stackIndex + 1);
    } else {
      setEnd(true);
    }
  }

  useEffect(() => {
    setTrialList([
      ...trials.map((trial, index) => (
        <TOLStack
          key={index.toString()}
          stackList={trial.stack}
          finalList={trial.final}
          maxDrops={trial.maxDrops}
          sendResult={onResultCallback}
          stackIndex={index}
        />
      )),
    ]);
  }, []);

  const endTransition = useTransition(end, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: (-1 * 20) / 5, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
    delay: 1000,
  });

  const trialTransition = useTransition(start && !end, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  return (
    <div className={styles.tolCont}>
      {trialTransition((style, show) =>
        show ? (
          <animated.div style={style}>{trialList[tolIndex]}</animated.div>
        ) : (
          ""
        )
      )}
      {endTransition((transition, show) =>
        show ? (
          <animated.div style={transition}>
            <br />
            <p> {tolData.completed} </p>
            <CustomButton
              text={tolData.practiceEndButton}
              onClick={() => history.push("/problem1")}
              block
            />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

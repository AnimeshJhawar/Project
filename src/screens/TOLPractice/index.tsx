/* eslint-disable no-unused-vars */
import React, { useState, useEffect, ReactNode } from "react";
import { useHistory } from "react-router";
import { animated, useTransition } from "react-spring";
import { CustomButton } from "../../components/CustomButton";
import { TOLStack } from "../../components/TOLStack";
import { languageContext } from "../../context/languageContext";
import {
  tolData as English,
  tolDataHindi as Hindi,
  practiceTrials,
} from "../../data/TOL";
import { FirebaseContext } from "../../firebase";
import styles from "./style.module.css";

export interface TOLPracticeProps {}

export const TOLPractice: React.FC<TOLPracticeProps> = () => {
  const history = useHistory();
  const [tolIndex, setTolIndex] = useState(0);
  const start = true;
  const [end, setEnd] = useState(false);

  const [trialList, setTrialList] = useState<ReactNode[]>([]);

  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();

  const [tolData, settolData] = React.useState(English);
  const { lang } = React.useContext(languageContext);

  React.useEffect(() => {
    settolData(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  function onResultCallback(
    result: boolean,
    dropsUsed: number,
    stackIndex: number
  ) {
    if (stackIndex < practiceTrials.length) {
      firestore
        ?.collection("Games")
        .doc("Bart")
        .collection(sessionStorage.getItem("uuid")!)
        .doc(tolIndex.toString())
        .set({
          id: sessionStorage.getItem("uuid"),
          trialCount: tolIndex,
          result,
          moves: dropsUsed,
          timestamp: Date.now(),
        })
        .then(() => {
          // console.log("Document written");
        })
        .catch((error) => {
          // console.error("Error adding document: ", error);
        });
    }
    if (stackIndex < practiceTrials.length - 1) {
      setTolIndex(stackIndex + 1);
    } else {
      setEnd(true);
    }
  }

  useEffect(() => {
    setTrialList([
      ...practiceTrials.map((trial, index) => (
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
      {tolData.practiceText}
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
            <p> {tolData.endedPractice} </p>
            <CustomButton
              text={tolData.practiceEndButton}
              onClick={() => history.push("/tol")}
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

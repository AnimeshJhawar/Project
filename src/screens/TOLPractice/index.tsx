/* eslint-disable no-unused-vars */
import React, { useState, useEffect, ReactNode } from "react";
import { animated, useTransition } from "react-spring";
import { CustomButton } from "../../components/CustomButton";
import { TOLStack } from "../../components/TOLStack";
import { tolData, practiceTrials } from "../../data/TOL";
import { FirebaseContext } from "../../firebase";
import useWindowDimensions from "../../utils/viewport";
import styles from "./style.module.css";

export interface TOLPracticeProps {
  onNext: Function;
}

export const TOLPractice: React.FC<TOLPracticeProps> = ({ onNext }) => {
  const [tolIndex, setTolIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  const [trialList, setTrialList] = useState<ReactNode[]>([]);

  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();

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

  function onStartHandeler() {
    setStart(true);
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

  const startButtonTransition = useTransition(!start, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: (-1 * 10) / 5, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
  });

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
      {startButtonTransition((style, show) =>
        show ? (
          <animated.div style={style}>
            <CustomButton text="START" onClick={onStartHandeler} />
          </animated.div>
        ) : (
          ""
        )
      )}
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
            <CustomButton
              text={tolData.lastpageText}
              isSecondary
              onClick={onNext}
            />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
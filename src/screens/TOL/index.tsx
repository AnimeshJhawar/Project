/* eslint-disable no-unused-vars */
import React, { useState, useEffect, ReactNode } from "react";
import { useHistory } from "react-router";
import { animated, useTransition } from "react-spring";
import { CustomButton } from "../../components/CustomButton";
import { TOLStack } from "../../components/TOLStack";
import { tolData, trials } from "../../data/TOL";
import { FirebaseContext } from "../../firebase";
import styles from "./style.module.css";

export interface TOLProps {}

export const TOL: React.FC<TOLProps> = () => {
  const history = useHistory();
  const [tolIndex, setTolIndex] = useState(0);
  const [end, setEnd] = useState(false);

  const [trialList, setTrialList] = useState<ReactNode[]>([]);

  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();

  function onResultCallback(
    result: boolean,
    dropsUsed: number,
    stackIndex: number
  ) {
    if (stackIndex < trials.length) {
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

  return (
    <div className={styles.tolCont}>
      {endTransition((transition, show) =>
        show ? (
          <animated.div style={transition}>
            <CustomButton
              text={tolData.lastpageText}
              isSecondary
              onClick={() => history.push("/tol")}
            />
          </animated.div>
        ) : (
          <animated.div style={transition}>{trialList[tolIndex]}</animated.div>
        )
      )}
    </div>
  );
};

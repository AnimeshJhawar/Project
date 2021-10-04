/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useHistory } from "react-router";
import { isMobile } from "react-device-detect";
import { BalloonScreenAnimated } from "../../components/BalloonScreenAnimated";
import styles from "./style.module.css";
import {
  bartText as English,
  bartTextHindi as Hindi,
  gameData,
} from "../../data/bart";
import { IconInContainer } from "../../components/IconInContainer";
import { FirebaseContext } from "../../firebase";
import { languageContext } from "../../context/languageContext";

const { Text } = Typography;
export interface BartProps {}

export const Bart: React.FC<BartProps> = () => {
  const history = useHistory();
  const [startTime, setStartTime] = useState(0);

  const [bartText, setBartText] = React.useState(English);
  const { lang } = React.useContext(languageContext);
  React.useEffect(() => {
    setBartText(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  const moneyHeading = (text: string, money: string) => {
    return (
      <div className={styles.moneyHeading}>
        <Text> {text} </Text>
        <Text strong> {money} </Text>
      </div>
    );
  };

  const [totalAmount, setTotalAmount] = useState(bartText.startingAmount);
  const [lastAmount, setLastAmount] = useState(0);

  const firebase = React.useContext(FirebaseContext);
  const firestore = firebase?.firebase.firestore();

  const updateData = (data: {
    push: number;
    next: boolean;
    burst: boolean;
    trial: number;
    life: number;
  }) => {
    if (data.next) {
      setTotalAmount(totalAmount + (data.burst ? 0 : lastAmount));
      firestore
        ?.collection("Games")
        .doc("Bart")
        .collection(sessionStorage.getItem("uuid")!)
        .doc(data.trial.toString())
        .set({
          id: sessionStorage.getItem("uuid"),
          device: isMobile ? "Not Mobile" : "Not Mobile",
          startTime,
          trialnumber: data.trial,
          burst: data.burst,
          totalearning: totalAmount,
          lastAmount,
          push: data.push,
          timestamp: Date.now(),
        })
        .then(() => {
          // console.log("Document written");
        })
        .catch((error) => {
          // console.error("Error adding document: ", error);
        });
      if (!data.burst) {
        setLastAmount(0);
      }
    }
    if (data.push) {
      setLastAmount(data.next ? 0 : data.push * bartText.perPushAmount);
    }
  };

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  return (
    <div className={styles.bart}>
      <div className={styles.money}>
        <IconInContainer
          iconLink="/assets/balloon/money-bag.png"
          rightComponent={moneyHeading(bartText.last, `${lastAmount} Rs.`)}
          avatarColor="gold"
        />
        <IconInContainer
          iconLink="/assets/balloon/money-bag.png"
          rightComponent={moneyHeading(bartText.total, `${totalAmount} Rs.`)}
          avatarColor="gold"
        />
      </div>

      <BalloonScreenAnimated
        trialCounts={gameData.trialCounts}
        balloonColors={gameData.ballonsColors}
        updateMethod={(d: {
          push: number;
          next: boolean;
          burst: boolean;
          trial: number;
          life: number;
        }) => updateData(d)}
        onEnd={() => history.push("/activities1")}
      />
    </div>
  );
};

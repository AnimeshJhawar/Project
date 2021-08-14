import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useHistory } from "react-router";
import { BalloonScreenAnimated } from "../../components/BalloonScreenAnimated";
import styles from "./style.module.css";
import { bartText, practiceData } from "../../data/bart";
import { IconInContainer } from "../../components/IconInContainer";

const { Text } = Typography;
export interface BartPracticeProps {}

export const BartPractice: React.FC<BartPracticeProps> = () => {
  const history = useHistory();

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

  const updateData = (data: {
    push: number;
    next: boolean;
    burst: boolean;
  }) => {
    if (data.next) {
      setTotalAmount(totalAmount + (data.burst ? 0 : lastAmount));
      if (!data.burst) {
        setLastAmount(0);
      }
    }
    if (data.push) {
      setLastAmount(data.next ? 0 : data.push * bartText.perPushAmount);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.bart}>
      <p> Practice Trials</p>
      <div className={styles.money}>
        <IconInContainer
          iconLink="/assets/balloon/money-bag.png"
          rightComponent={moneyHeading(bartText.total, `${totalAmount} Rs.`)}
          avatarColor="gold"
        />
        <IconInContainer
          iconLink="/assets/balloon/money-bag.png"
          rightComponent={moneyHeading(bartText.last, `${lastAmount} Rs.`)}
          avatarColor="gold"
        />
      </div>

      <BalloonScreenAnimated
        trialCounts={practiceData.trialCounts}
        balloonColors={practiceData.ballonsColors}
        updateMethod={(d: { push: number; next: boolean; burst: boolean }) =>
          updateData(d)
        }
        onEnd={() => history.push("/bart")}
      />
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { BalloonScreenAnimated } from "../../components/BalloonScreenAnimated";
import styles from "./style.module.css";
import { bartText, gameData } from "../../data/bart";
import { IconInContainer } from "../../components/IconInContainer";

const { Text } = Typography;
export interface BartProps {}

export const Bart: React.FC<BartProps> = () => {
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
        trialCounts={gameData.trialCounts}
        balloonColors={gameData.ballonsColors}
        updateMethod={(d: { push: number; next: boolean; burst: boolean }) =>
          updateData(d)
        }
      />
    </div>
  );
};

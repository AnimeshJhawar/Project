import React, { useState } from "react";
import { Typography } from "antd";
import { useHistory } from "react-router";
import { BalloonScreenAnimated } from "../../components/BalloonScreenAnimated";
import styles from "./style.module.css";
import {
  bartText as English,
  practiceData,
  bartTextHindi as Hindi,
} from "../../data/bart";
import { IconInContainer } from "../../components/IconInContainer";
import { languageContext } from "../../context/languageContext";

const { Text } = Typography;
export interface BartPracticeProps {}

export const BartPractice: React.FC<BartPracticeProps> = () => {
  const history = useHistory();

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

  return (
    <div className={styles.bart}>
      <p className={styles.practice}> Practice Trials</p>
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
        trialCounts={practiceData.trialCounts}
        balloonColors={practiceData.ballonsColors}
        updateMethod={(d: { push: number; next: boolean; burst: boolean }) =>
          updateData(d)
        }
        onEnd={() => history.push("/bart")}
        practice
      />
    </div>
  );
};

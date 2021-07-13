/* eslint-disable no-unused-vars */
import { Space, Typography, Row, Col } from "antd";
import { number } from "prop-types";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import { iowaData, iowaGameData } from "../../data/iowa";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../CustomButton";
import { PokerDeck } from "../PokerCard";
import { Progress } from "../Progress";
import { StroopCard } from "../StroopCard";
import styles from "./style.module.css";

const { won, lost, initialLoan, finalLimit, lastPage } = iowaData;
const { cardsData, trialsCount } = iowaGameData;

export interface PokerCardsGroupProps {
  onEnd: Function;
}
export const PokerCardsGroup: React.FC<PokerCardsGroupProps> = ({ onEnd }) => {
  const { width } = useWindowDimensions();
  const [currentCardsIdx, setCurrentCardsIdx] = useState<number>(0);
  const [freeze, setFreeze] = useState(false);
  const [timer, setTimer] = useState(0);
  const [end, setEnd] = useState(false);
  const [recentResult, setRecentResult] = useState<{
    won: number;
    lost: number;
  }>({ won: 0, lost: 0 });
  const fixedPercent = (initialLoan * 100) / finalLimit;
  const [amount, setAmount] = useState(initialLoan);

  const handelDeckClick = (deckId: string) => {
    if (currentCardsIdx + 1 < trialsCount) {
      setCurrentCardsIdx(currentCardsIdx + 1);
      setRecentResult(cardsData[deckId][currentCardsIdx]);
      setAmount(recentResult.won - recentResult.lost + amount);
    } else {
      setEnd(true);
    }
  };

  // useEffect(() => {
  //   if (currentCardsIdx > 0) {
  //     setTimeout(() => setTimer(timer + 1), 1);
  //   }
  // });

  const endTransition = useTransition(end, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 0,
  });

  return (
    <div className={styles.groupContainer}>
      <div className={styles.progressBars}>
        <Progress
          percent={fixedPercent}
          strokeColor="orange"
          title="Loan Amount"
        />
        <Progress
          percent={(amount * 100) / finalLimit}
          strokeColor={
            fixedPercent > (amount * 100) / finalLimit ? "red" : undefined
          }
          title="Current Balance"
        />
      </div>
      <div className={styles.result}>
        <StroopCard text={`You Won : ${recentResult.won} Rs`} />
        <StroopCard text={`You Lost : ${recentResult.lost} Rs`} />
      </div>
      {endTransition((transition, show) =>
        show ? (
          <animated.div
            style={transition}
            className={styles.endButtonContainer}
          >
            <CustomButton text={lastPage} onClick={onEnd} />
          </animated.div>
        ) : (
          ""
        )
      )}

      {endTransition((transition, show) =>
        !show ? (
          <animated.div style={transition} className={styles.decksContainer}>
            <Row gutter={0}>
              {Object.keys(cardsData).map((cardId: string) => (
                <Col key={cardId} className="gutter-row" span={6}>
                  <PokerDeck
                    trials={trialsCount}
                    deckId={cardId}
                    sendId={handelDeckClick}
                  />
                </Col>
              ))}
            </Row>
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

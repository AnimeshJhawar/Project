/* eslint-disable no-unused-vars */
import { Space, Typography, Row, Col } from "antd";
import { bool, number } from "prop-types";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import { headings } from "../../data/iowa";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../CustomButton";
import { PokerDeck } from "../PokerCard";
import styles from "./style.module.css";

export interface PokerCardsGroupProps {
  cardsData: {
    [cardId: string]: { won: number; lost: number }[];
  };
  trialsCount: number;
}
export const PokerCardsGroup: React.FC<PokerCardsGroupProps> = ({
  cardsData,
  trialsCount,
}) => {
  const [currentCardsIdx, setCurrentCardsIdx] = useState<number>(-1);
  const [freeze, setFreeze] = useState(false);
  const handelOpenCard = (open: boolean, id: string) => {
    if (currentCardsIdx + 1 <= trialsCount - 1) {
      setCurrentCardsIdx(currentCardsIdx + 1);
      console.log(id, currentCardsIdx);
    }
  };

  const fadingTransition = useTransition(freeze, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 120 },
  });

  return (
    <div className={styles.groupContainer}>
      <Row gutter={24}>
        {Object.keys(cardsData).map((cardId: string) => (
          <Col className="gutter-row" span={4} sm={6} xs={6} md={4}>
            <PokerDeck />
          </Col>
        ))}
      </Row>
    </div>
  );
};

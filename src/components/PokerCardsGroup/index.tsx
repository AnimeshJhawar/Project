/* eslint-disable no-unused-vars */
import { Space, Typography, Row, Col } from "antd";
import { bool, number } from "prop-types";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import { headings } from "../../data/iowa";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../CustomButton";
import { PokerCard } from "../PokerCard";
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
  const [currentCardsIdx, setCurrentCardsIdx] = useState<number>(0);
  const [freeze, setFreeze] = useState(false);
  const handelOpenCard = (
    open: boolean,
    id: string,
    wonLost: { won: number; lost: number }
  ) => {
    setFreeze(true);

    if (currentCardsIdx + 1 <= trialsCount - 1 && !open) {
      setCurrentCardsIdx(currentCardsIdx + 1);
      console.log(id, wonLost);
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
      <Row gutter={16}>
        {Object.keys(cardsData).map((cardId: string) => (
          <Col className="gutter-row" span={6} md={6}>
            <PokerCard
              cardId={cardId}
              wonLost={cardsData[cardId][currentCardsIdx]}
              wasOpened={(
                open: boolean,
                id: string,
                wonLost: { won: number; lost: number }
              ) => handelOpenCard(open, id, wonLost)}
              freeze={freeze}
            />
          </Col>
        ))}
      </Row>
      <br />
      {fadingTransition((style, show) =>
        show ? (
          <animated.div style={style}>
            <CustomButton
              text="Continue"
              disabled={!freeze}
              block
              onClick={() => setFreeze(false)}
            />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

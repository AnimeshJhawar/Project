/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { PokerCardsGroup } from "../../components/PokerCardsGroup";
import { gameData, stroopData } from "../../data/stroop";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../../components/CustomButton";
import { StroopGame } from "../../components/StroopGame";

const { Text } = Typography;
export interface StroopProps {}

export const Stroop: React.FC<StroopProps> = () => {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const { width } = useWindowDimensions();

  const onStartHandeler = (e: React.MouseEvent) => {
    setStart(!start);
  };
  const onEnd = () => {
    // write code to hnadel end click
  };

  const startButtonTransition = useTransition(!start, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const endTransition = useTransition(end, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: (-1 * width) / 5, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
    delay: 1000,
  });

  return (
    <div className={styles.stroop}>
      {startButtonTransition((transition, show) =>
        show ? (
          <animated.div
            style={{ ...transition, position: "absolute", top: "20px" }}
            className={styles.tunnel}
          >
            <CustomButton text="START" onClick={onStartHandeler} />
          </animated.div>
        ) : (
          <animated.div style={transition}>
            <StroopGame />
          </animated.div>
        )
      )}
    </div>
  );
};

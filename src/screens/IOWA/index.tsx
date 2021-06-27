/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { PokerCardsGroup } from "../../components/PokerCardsGroup";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../../components/CustomButton";

const { Text } = Typography;
export interface IOWAProps {}

export const IOWA: React.FC<IOWAProps> = () => {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {}, []);

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
    <div className={styles.iowa}>
      {startButtonTransition((transition, show) =>
        show ? (
          <animated.div
            style={{ ...transition, position: "absolute", top: "20px" }}
          >
            <CustomButton text="START" onClick={onStartHandeler} />
          </animated.div>
        ) : (
          <animated.div style={transition} className={styles.iowaCards}>
            <PokerCardsGroup />
          </animated.div>
        )
      )}
    </div>
  );
};

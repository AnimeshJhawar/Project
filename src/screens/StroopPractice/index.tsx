/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../../components/CustomButton";
import { StroopGame } from "../../components/StroopGame";

const { Text } = Typography;
export interface StroopPracticeProps {
  onNext: Function;
}

export const StroopPractice: React.FC<StroopPracticeProps> = ({ onNext }) => {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const { width } = useWindowDimensions();

  const onStartHandeler = (e: React.MouseEvent) => {
    setStart(!start);
  };

  const startButtonTransition = useTransition(!start, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
            <StroopGame onEnd={onNext} practice />
          </animated.div>
        )
      )}
    </div>
  );
};

/* eslint-disable no-unused-vars */
import React, { CSSProperties, ReactNode, useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { BallonBackground } from "../BallonBackground";
import { CustomButton } from "../CustomButton";
import { BallonPump } from "../BallonPump";

export interface BallonAnimatedProps {
  style?: CSSProperties;
}

export const BallonAnimated: React.FC<BallonAnimatedProps> = ({
  style = {},
}) => {
  const [start, setStart] = useState(false);
  const startButtonTransition = useTransition(!start, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: -100, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
  });

  const tunnelTransition = useTransition(start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  const ballonTransition = useTransition(start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  const controlTransition = useTransition(start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  const onStartHandeler = (e: React.MouseEvent) => {
    setStart(!start);
  };

  return (
    <div className={styles.page} style={{ ...style }}>
      <div className={styles.container}>
        <div className={styles.background}>
          <BallonBackground />
        </div>
        {/* {!start ? (
        <div className={styles.startButton}>
          <CustomButton text="START" onClick={onStartHandeler} />
        </div>
      ) : (
        ""
      )} */}
        {startButtonTransition((transition, show) =>
          show ? (
            <animated.div style={transition} className={styles.tunnel}>
              <CustomButton text="START" onClick={onStartHandeler} />
            </animated.div>
          ) : (
            ""
          )
        )}
        {tunnelTransition((transition, show) =>
          show ? (
            <animated.div style={transition} className={styles.tunnel}>
              <BallonPump />
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
      {controlTransition((transition, show) =>
        show ? (
          <animated.div style={transition} className={styles.controlButtons}>
            <CustomButton text="Fill" />
            <CustomButton text="Collect" />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

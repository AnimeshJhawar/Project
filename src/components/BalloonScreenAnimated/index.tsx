/* eslint-disable no-unused-vars */
import React, { CSSProperties, ReactNode, useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { BalloonBackground } from "../BalloonBackground";
import { CustomButton } from "../CustomButton";
import { BalloonPump } from "../BalloonPump";

export interface BalloonScreenAnimatedProps {
  style?: CSSProperties;
}

export const BalloonScreenAnimated: React.FC<BalloonScreenAnimatedProps> = ({
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

  const balloonTransition = useTransition(start, {
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
          <BalloonBackground />
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
              <BalloonPump />
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

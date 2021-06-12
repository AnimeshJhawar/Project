/* eslint-disable no-unused-vars */
import React, { CSSProperties, ReactNode, useState } from "react";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { BalloonBackground } from "../BalloonBackground";
import { CustomButton } from "../CustomButton";
import { BalloonPump } from "../BalloonPump";
import { BalloonAnimated } from "../BalloonAnimated";
import useWindowDimensions from "../../utils/viewport";

export interface BalloonScreenAnimatedProps {
  style?: CSSProperties;
}

export const BalloonScreenAnimated: React.FC<BalloonScreenAnimatedProps> = ({
  style = {},
}) => {
  const [start, setStart] = useState(false);
  const [collect, setCollect] = useState(false);
  const [explode, setExplode] = useState(false);
  const { width } = useWindowDimensions();

  const startButtonTransition = useTransition(!start, {
    from: { x: 0, y: 0, opacity: 0 },
    enter: { x: 0, y: (-1 * width) / 5, opacity: 1 },
    leave: { x: 0, y: -200, opacity: 0 },
  });

  const tunnelTransition = useTransition(start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 0, y: -100, opacity: 0 },
  });

  const balloonTransition = useTransition(!collect && start, {
    from: { x: 0, y: 100, opacity: 0 },
    enter: { x: 0, y: -1 * Math.min(width * 0.1, 60), opacity: 1 },
    leave: explode
      ? { height: 0, width: 0, opacity: 0, overflow: "none" }
      : { x: 0, y: -200, opacity: 0 },
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
        {balloonTransition((transition, show) =>
          show ? (
            <animated.div style={transition} className={styles.tunnel}>
              <BalloonAnimated
                color="red"
                height={width * 0.1 * 0.8}
                stringColor="rgba(0,0,0,0.2)"
                width={width * 0.1}
              />
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
      {controlTransition((transition, show) =>
        show ? (
          <animated.div style={transition} className={styles.controlButtons}>
            <CustomButton
              text="Fill"
              onClick={() => {
                setExplode(true);
                setCollect(true);
              }}
            />
            <CustomButton
              text="Collect"
              onClick={() => {
                setCollect(true);
              }}
            />
          </animated.div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

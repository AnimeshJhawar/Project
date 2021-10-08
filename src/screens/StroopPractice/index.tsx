/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useHistory } from "react-router";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../../components/CustomButton";
import { StroopGame } from "../../components/StroopGame";
import {
  stroopInstructions as English,
  stroopInstructionsHindi as Hindi,
} from "../../data/stroopInstructions";
import { languageContext } from "../../context/languageContext";

const { Text } = Typography;
export interface StroopProps {}

export const StroopPractice: React.FC<StroopProps> = () => {
  const history = useHistory();
  const [start, setStart] = useState(false);

  const onStartHandeler = (e: React.MouseEvent) => {
    setStart(!start);
  };

  const startButtonTransition = useTransition(!start, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const [stroopInstructions, setStroopInstructions] = useState(English);
  const { lang } = React.useContext(languageContext);

  useEffect(() => {
    setStroopInstructions(lang === "Hindi" ? Hindi : English);
  }, [lang]);

  return (
    <div className={styles.stroop}>
      {startButtonTransition((transition, show) =>
        show ? (
          <animated.div
            style={{ ...transition, position: "absolute", top: "20px" }}
          >
            <div className={styles.container}>
              <h1>{stroopInstructions.heading}</h1>
              <p>
                <b>{stroopInstructions.remember}</b>
              </p>
              <ul>
                {stroopInstructions.points.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>
            </div>

            <CustomButton text="START" block onClick={onStartHandeler} />
          </animated.div>
        ) : (
          <animated.div style={transition}>
            <StroopGame onEnd={() => history.push("/stroop")} practice />
          </animated.div>
        )
      )}
    </div>
  );
};

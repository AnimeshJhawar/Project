/* eslint-disable no-nested-ternary */
import React, { CSSProperties } from "react";
import styles from "./style.module.css";

export interface StroopCardProps {
  correct?: boolean;
  text?: string;
  style?: CSSProperties;
}

export const StroopCard: React.FC<StroopCardProps> = ({
  correct = false,
  text,
  style = {},
}) => {
  return (
    <div className={styles.stroopCard} style={style}>
      {!text ? (correct ? "Correct" : "Wrong") : text}
    </div>
  );
};

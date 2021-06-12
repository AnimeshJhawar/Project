/* eslint-disable no-unused-vars */
import React, { ReactNode, useState } from "react";
import styles from "./style.module.css";
import { ProgressiveImage } from "../ProgressiveImage";

export interface BalloonAnimatedProps {
  height?: number;
  width?: number;
  color?: string;
  stringColor?: string;
  stringLength?: number;
}

export const BalloonAnimated: React.FC<BalloonAnimatedProps> = ({
  width = 120,
  height = 145,
  color = "hsl(215,50%,65%)",
  stringColor = "rgba(0,0,0,0.2)",
  stringLength = 40 + height,
}) => {
  const balloonStyle = {
    background: color,
    width: `${width}px`,
    height: `${height}px`,
  };

  const stringStyle = {
    top: `${height / 2}px`,
    background: stringColor,
    height: `${stringLength}px`,
  };
  return (
    <div className={styles.balloonContainer}>
      <div className={styles.balloon} style={{ ...balloonStyle }} />
      <div className={styles.string} style={{ ...stringStyle }} />
    </div>
  );
};

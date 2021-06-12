/* eslint-disable no-unused-vars */
import React, { ReactNode, useState } from "react";
import styles from "./style.module.css";
import { ProgressiveImage } from "../ProgressiveImage";

export interface BallonPumpProps {
  iconLink?: string;
  blurIcon?: string;
  width?: string;
}

export const BallonPump: React.FC<BallonPumpProps> = ({
  width = "100%",
  iconLink = "/assets/ballon/tunnel.png",
  blurIcon = "",
}) => {
  return (
    <ProgressiveImage
      imgSrc={iconLink}
      compressedSrc={blurIcon}
      imgWidth={width}
    />
  );
};

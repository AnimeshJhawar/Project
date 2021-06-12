/* eslint-disable no-unused-vars */
import React, { ReactNode, useState } from "react";
import styles from "./style.module.css";
import { ProgressiveImage } from "../ProgressiveImage";

export interface BallonBackgroundProps {
  iconLink?: string;
  blurIcon?: string;
  width?: string;
}

export const BallonBackground: React.FC<BallonBackgroundProps> = ({
  width = "100%",
  iconLink = "/assets/ballon/background2.jpg",
  blurIcon = "/assets/ballon/background2-min.jpg",
}) => {
  return (
    <ProgressiveImage
      imgSrc={iconLink}
      compressedSrc={blurIcon}
      imgWidth={width}
    />
  );
};

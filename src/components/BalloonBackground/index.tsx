/* eslint-disable no-unused-vars */
import React, { ReactNode, useState } from "react";
import styles from "./style.module.css";
import { ProgressiveImage } from "../ProgressiveImage";

export interface BalloonBackgroundProps {
  iconLink?: string;
  blurIcon?: string;
  width?: string;
}

export const BalloonBackground: React.FC<BalloonBackgroundProps> = ({
  width = "100%",
  iconLink = "/assets/balloon/background2.jpg",
  blurIcon = "/assets/balloon/background2-min.jpg",
}) => {
  return (
    <ProgressiveImage
      imgSrc={iconLink}
      compressedSrc={blurIcon}
      imgWidth={width}
    />
  );
};

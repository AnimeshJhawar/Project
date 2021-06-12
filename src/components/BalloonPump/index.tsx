/* eslint-disable no-unused-vars */
import React, { ReactNode, useState } from "react";
import styles from "./style.module.css";
import { ProgressiveImage } from "../ProgressiveImage";

export interface BalloonPumpProps {
  iconLink?: string;
  blurIcon?: string;
  width?: string;
}

export const BalloonPump: React.FC<BalloonPumpProps> = ({
  width = "100%",
  iconLink = "/assets/Balloon/tunnel.png",
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

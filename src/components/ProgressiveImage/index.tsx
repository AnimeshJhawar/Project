/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./style.module.css";
import useProgressiveImg from "./util";

export interface ProgressiveImageProps {
  compressedSrc: string | undefined;
  imgSrc: string | undefined;
  imgWidth?: number | string;
  blurPixel?: number;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  imgSrc = "/assets/Logo/Mark/Blue.png",
  compressedSrc = "",
  imgWidth = "100%",
  blurPixel = 3,
}) => {
  const [src, { blur }] = useProgressiveImg(compressedSrc, imgSrc);

  return (
    <div style={{ width: imgWidth }}>
      <img
        alt=""
        src={src}
        style={{
          width: "100%",
          filter: blur ? `blur(${blurPixel}px)` : "none",
          transition: blur ? "none" : "filter 0.3s ease-out",
        }}
      />
    </div>
  );
};

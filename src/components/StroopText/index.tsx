/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Typography } from "antd";
import styles from "./style.module.css";

const { Text } = Typography;

export interface StroopTextProps {
  text: string;
  ink: string;
}

export const StroopText: React.FC<StroopTextProps> = ({
  text = "StroopText",
  ink = "Blue",
}) => {
  useEffect(() => {});
  return (
    <Text style={{ color: ink }} className={styles.text}>
      {text}
    </Text>
  );
};

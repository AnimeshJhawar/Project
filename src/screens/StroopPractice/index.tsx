/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useHistory } from "react-router";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { CustomButton } from "../../components/CustomButton";
import { StroopGame } from "../../components/StroopGame";

const { Text } = Typography;
export interface StroopPracticeProps {}

export const StroopPractice: React.FC<StroopPracticeProps> = () => {
  const history = useHistory();

  return (
    <div className={styles.stroop}>
      Stroop Practice Trials
      <StroopGame onEnd={() => history.push("/stroop")} practice />
    </div>
  );
};

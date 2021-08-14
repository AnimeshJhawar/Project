/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { PokerCardsGroup } from "../../components/PokerCardsGroup";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../../components/CustomButton";

const { Text } = Typography;
export interface IOWAPracticeProps {
  onNext: Function;
}

export const IOWAPractice: React.FC<IOWAPracticeProps> = ({ onNext }) => {
  return (
    <div className={styles.iowaPractice}>
      <PokerCardsGroup onEnd={onNext} practice />
    </div>
  );
};

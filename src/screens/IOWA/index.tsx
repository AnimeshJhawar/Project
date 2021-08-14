/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useTransition, animated } from "react-spring";
import styles from "./style.module.css";
import { PokerCardsGroup } from "../../components/PokerCardsGroup";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../../components/CustomButton";

const { Text } = Typography;
export interface IOWAProps {
  onNext: Function;
}

export const IOWA: React.FC<IOWAProps> = ({ onNext }) => {
  return (
    <div className={styles.iowa}>
      <PokerCardsGroup onEnd={onNext} />
    </div>
  );
};

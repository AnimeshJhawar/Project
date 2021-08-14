/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useTransition, animated } from "react-spring";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { PokerCardsGroup } from "../../components/PokerCardsGroup";
import useWindowDimensions from "../../utils/viewport";
import { CustomButton } from "../../components/CustomButton";

export interface IOWAPracticeProps {}

export const IOWAPractice: React.FC<IOWAPracticeProps> = () => {
  const history = useHistory();
  return (
    <div className={styles.iowaPractice}>
      <p>IOWA Practice Trials</p>
      <PokerCardsGroup onEnd={() => history.push("/iowa")} practice />
    </div>
  );
};

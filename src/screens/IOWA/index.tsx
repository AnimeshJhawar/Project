/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./style.module.css";
import { PokerCardsGroup } from "../../components/PokerCardsGroup";

export interface IOWAProps {}

export const IOWA: React.FC<IOWAProps> = () => {
  const history = useHistory();
  return (
    <div className={styles.iowa}>
      <PokerCardsGroup onEnd={() => history.push("/activities2")} />
    </div>
  );
};

import React from "react";
import styles from "./style.module.css";

export interface StroopCardProps {
  correct?: boolean;
}

export const StroopCard: React.FC<StroopCardProps> = ({ correct = false }) => {
  return (
    <div className={styles.stroopCard}>{correct ? "Correct" : "Wrong"}</div>
  );
};

import { Progress as ProgressBar } from "antd";
import { ProgressSize } from "antd/lib/progress/progress";
import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export interface ProgressProps {
  percent?: number;
  strokeColor?: string;
  strokeLinecap?: "butt" | "square" | "round";
  successColor?: string;
  title?: string;
  size?: ProgressSize;
  steps?: string[];
  trailColor?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  percent = 0,
  strokeColor,
  strokeLinecap,
  successColor = "#209AE5",
  title,
  steps,
  size = "small",
  trailColor = "rgba(0,0,0,0.12)",
}) => {
  return (
    <div>
      {title && <div className={styles.title}>{title}</div>}
      {steps && (
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={`${step}${index}`}
              className={classnames(styles.step, {
                [styles.inactive]: (percent / 100) * steps.length < index,
              })}
              style={{ width: `${100 / steps.length}%` }}
            >
              {step}
            </span>
          ))}
        </div>
      )}
      <ProgressBar
        percent={percent}
        strokeColor={strokeColor}
        strokeLinecap={strokeLinecap}
        showInfo={false}
        size={size}
        trailColor={trailColor}
        success={{
          percent: percent >= 100 ? percent : undefined,
          strokeColor: successColor,
        }}
      />
    </div>
  );
};

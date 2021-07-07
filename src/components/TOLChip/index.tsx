/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import Color from "color";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./style.module.css";

export interface TOLChipProps {
  color?: string;
  height?: string;
  id?: string;
  index?: number;
  draggable?: boolean;
}

export const TOLChip: React.FC<TOLChipProps> = ({
  color = "blue",
  height = "50px",
  id = "",
  index = 1,
  draggable = false,
}) => {
  const shadowColor = Color(color).alpha(0.3);
  return (
    <>
      {!draggable ? (
        <div className={styles.scene}>
          <div
            className={styles.light}
            style={{
              height,
              width: height,
            }}
          >
            <div className={styles.clip}>
              <div
                className={styles.container}
                style={{
                  height,
                  width: height,
                }}
              >
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>

                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={`${styles.circle} ${styles.border}`}
                  style={{ backgroundColor: color }}
                ></div>

                <div
                  className={styles.circle}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={styles.circle}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={styles.circle}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={styles.circle}
                  style={{ backgroundColor: color }}
                ></div>
                <div
                  className={styles.circle}
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Draggable draggableId={id} index={index}>
          {(provided: any) => (
            <div
              className={styles.scene}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              style={{
                cursor: "pointer",
                ...provided.draggableProps.style,
              }}
            >
              {provided.placeholder}
              <div
                className={styles.light}
                style={{
                  height,
                  width: height,
                }}
              >
                <div className={styles.clip}>
                  <div
                    className={styles.container}
                    style={{
                      height,
                      width: height,
                    }}
                  >
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>

                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={`${styles.circle} ${styles.border}`}
                      style={{ backgroundColor: color }}
                    ></div>

                    <div
                      className={styles.circle}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={styles.circle}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={styles.circle}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={styles.circle}
                      style={{ backgroundColor: color }}
                    ></div>
                    <div
                      className={styles.circle}
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Draggable>
      )}{" "}
    </>
  );
};

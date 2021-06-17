/* eslint-disable no-unused-vars */
import { Space, Typography } from "antd";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { headings } from "../../data/iowa";
import useWindowDimensions from "../../utils/viewport";
import { ProgressiveImage } from "../ProgressiveImage";
import styles from "./style.module.css";

const { Text } = Typography;
export interface PokerCardProps {
  cardSrc?: string;
  compressedSrc?: string;
  wonLost?: { won: number; lost: number };
  wasOpened?: Function;
  cardId?: string;
  freeze?: boolean;
}
export const PokerCard: React.FC<PokerCardProps> = ({
  cardSrc = "/assets/iowa/card-blue.png",
  compressedSrc = "/assets/iowa/card-blue-min.png",
  wonLost = { won: 0, lost: 0 },
  wasOpened = () => null,
  cardId = "noIdGiven",
  freeze = false,
}) => {
  const { width } = useWindowDimensions();
  const [flipped, setFlipped] = useState(false);
  const targetRef = useRef<HTMLInputElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [borderRadius, setBorderRadius] = useState(Math.min(width * 0.08, 12));

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
      setBorderRadius(Math.min(width * 0.08, 12));
    }
  }, [width, flipped]);

  const handelFlip = () => {
    if (!freeze) {
      setFlipped(!flipped);
      wasOpened(flipped, cardId);
    }
  };

  useEffect(() => {
    if (!freeze && flipped) {
      setFlipped(false);
    }
  }, [freeze]);

  return (
    <div className={styles.cardContainer}>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div
          className={styles.card}
          onClick={() => handelFlip()}
          role="button"
          onKeyUp={() => null}
          tabIndex={0}
          style={{ borderRadius }}
          ref={targetRef}
        >
          <ProgressiveImage
            imgSrc={cardSrc}
            blurPixel={2}
            compressedSrc={compressedSrc}
          />
        </div>

        <div
          className={styles.cardContent}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            borderRadius,
            // eslint-disable-next-line no-nested-ternary
            fontSize: width <= 400 ? "8px" : width <= 668 ? "10.5px" : "18px",
          }}
          onClick={() => handelFlip()}
          role="button"
          onKeyUp={() => null}
          tabIndex={0}
        >
          <Space>
            <Text> {headings.won} </Text>{" "}
            <Text strong type="success">
              {" "}
              {wonLost.won}
            </Text>
          </Space>
          <Space>
            <Text> {headings.won} </Text>{" "}
            <Text strong type="danger">
              {" "}
              {wonLost.lost}
            </Text>
          </Space>
        </div>
      </ReactCardFlip>
    </div>
  );
};

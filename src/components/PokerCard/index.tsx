/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { render } from "react-dom";
import React, { EventHandler, ReactEventHandler, useState } from "react";
import { useSprings, animated, to } from "react-spring";
import { useGesture, useDrag } from "react-use-gesture";
import styles from "./style.module.css";
import { ProgressiveImage } from "../ProgressiveImage";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const toCustom = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform

export interface PokerDeckProps {
  xDir?: 1 | -1 | 0;
  yDir?: 1 | -1 | 0;
  resetAfterEmpty?: boolean;
}

export const PokerDeck: React.FC<PokerDeckProps> = ({
  xDir = 1,
  yDir = -1,
  resetAfterEmpty = false,
}) => {
  const cards = [
    "/assets/iowa/card-blue.png",
    "/assets/iowa/card-blue.png",
    "/assets/iowa/card-blue.png",
    "/assets/iowa/card-blue.png",
    "/assets/iowa/card-blue.png",
    "/assets/iowa/card-blue.png",
  ];

  const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(cards.length, (i) => ({
    ...toCustom(i),
    from: from(i),
  }));

  const bind = useGesture({
    onDrag: ({ args: [index], down }) => {
      const velocity = 0.4;
      const xDelta = 1;
      const trigger = !down; // If you flick hard enough it should trigger the card to fly out
      const dir = -1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = (200 + window.innerWidth) * xDir; // When a card is gone it flys out left or right, otherwise goes back to zero
        const y = (200 + window.innerHeight) * yDir; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 10 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length && resetAfterEmpty)
        setTimeout(() => {
          gone.clear();
          gone && set((i) => toCustom(i));
        }, 600);
    },
  });
  return (
    <div className={styles.deck}>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i.toString()}
          style={{
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: to([rot, scale], trans),
            }}
          >
            <ProgressiveImage
              imgSrc={cards[i]}
              compressedSrc={cards[i]}
              blurPixel={0}
              imgWidth="100%"
            />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

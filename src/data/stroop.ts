/* eslint-disable import/prefer-default-export */
export const stroopData = {
  countdown: 5, // in seconds
  countDownColor: "black",
  trialLength: 2500, // in mSeconds
  keys: ["b", "r", "g", "y"],
  trialResult: 1000, // in mSeconds, how much longer does, correct/ incoreect card be shown.
  bufferTime: 500, // in mSeconds, + sign before showing coloured text.
};

// write script to generate data for the game here

export const gameData = [
  { text: "green", ink: "blue", inkKey: "b" },
  { text: "yellow", ink: "blue", inkKey: "b" },
  { text: "blue", ink: "green", inkKey: "g" },
  { text: "green", ink: "blue", inkKey: "b" },
  { text: "yellow", ink: "yellow", inkKey: "y" },
  { text: "blue", ink: "green", inkKey: "g" },
];

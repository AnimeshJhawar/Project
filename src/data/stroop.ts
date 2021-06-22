/* eslint-disable no-unused-vars */
export const stroopData = {
  countdown: 5, // in seconds
  countDownColor: "black",
  trialLength: 2500, // in mSeconds
  keys: ["b", "r", "g", "y"],
  trialResult: 1000, // in mSeconds, how much longer does, correct/ incoreect card be shown.
  bufferTime: 500, // in mSeconds, + sign before showing coloured text.
};

const list = ["blue", "red", "green", "yellow"];

// write script to generate data for the game here
function generateStroopData(trials: number) {
  const data = [
    ...Array.from({ length: trials }, () => {
      const randomText = list[Math.floor(Math.random() * list.length)];
      const randomInk = list[Math.floor(Math.random() * list.length)];
      return {
        text: randomText,
        ink: randomInk,
        inkKey: randomInk.slice(0, 1),
      };
    }),
  ];
  return data;
}
export const gameData = generateStroopData(75);

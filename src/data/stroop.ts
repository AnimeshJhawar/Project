/* eslint-disable no-unused-vars */
export const stroopData = {
  trialsCount: 50,
  countdown: 5, // in seconds
  countDownColor: "black",
  bufferTime: 500, // in mSeconds, + sign  before showing coloured text.
  trialLength: 2500, // in mSeconds this is the total time (buffer time) + inked text time.
  keys: ["b", "r", "g", "y"],
  trialResult: 1000, // in mSeconds, how much longer does, correct/ incoreect card be shown.
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
export const practiceGameData = generateStroopData(10);
export const gameData = generateStroopData(stroopData.trialsCount);

import getLifeArr from "./generateBartData";

// eslint-disable-next-line import/prefer-default-export
export const bartText = {
  money: "Rs",
  collect: "Press to Collect Rs.",
  pump: "Press this to pump up the balloon.",
  total: "Total Earned",
  last: "Last Balloon",
  lastPage:
    "Thank you for participating in the task. Please click here for the next task.",
  startingAmount: 0,
  perPushAmount: 10,
};

const colors = ["red", "green", "blue", "grey"];
// array code
const arraySize = 30;
const lowerLim = 2;
const upperLim = 32;
const avg = 20;
const trialCounts = getLifeArr(arraySize, lowerLim, upperLim, avg);
const ballonsColors = [
  ...Array.from(
    { length: arraySize },
    () => colors[Math.floor(Math.random() * colors.length)]
  ),
];

const gameData = {
  trialCounts,
  ballonsColors,
};
export { gameData };

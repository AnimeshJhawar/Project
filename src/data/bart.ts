import getLifeArr from "./generateBartData";

// eslint-disable-next-line import/prefer-default-export
export const bartText = {
  money: "Rs",
  collect: "Collect Rs.",
  pump: "Pump Ballon",
  total: "Total Earned",
  last: "Last Balloon",
  lastPage: "Please click here for the next task.",
  startingAmount: 0,
  perPushAmount: 10,
  endPractice: "Practice Finished, Now click on play the game",
};

const colors = ["red", "green", "blue", "grey"];
// array code
const arraySize = 30;
const lowerLim = 2;
const upperLim = 32;
const avg = 20;
const trialCounts = getLifeArr(arraySize, lowerLim, upperLim, avg);
const practiceCounts = getLifeArr(3, lowerLim, upperLim, avg);
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
const practiceData = {
  trialCounts: practiceCounts,
  ballonsColors,
};
export { gameData, practiceData };

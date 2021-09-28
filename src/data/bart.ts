/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
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
  endPractice: "Click here play the game",
};
export const bartTextHindi = {
  money: "रु",
  collect: "रुपये इकट्ठा करे",
  pump: "पम्प करो",
  total: "कुल कमाई",
  last: "आखिरी गुब्बारा से कमाई",
  lastPage: "अगला कार्य खेलें",
  startingAmount: 0,
  perPushAmount: 10,
  endPractice: "अभ्यास समाप्त",
};

const lowerLim = 2;
const upperLim = 32;
const avg = 20;
function shuffleFisherYates(array: any) {
  let i = array.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [array[i], array[ri]] = [array[ri], array[i]];
  }
  return array;
}

let mixedCounts = getLifeArr(5, 2, 8, 4).concat(
  getLifeArr(5, 2, 16, 8).concat(getLifeArr(5, 2, 32, 16))
);
const blockCounts = getLifeArr(5, 2, 8, 4).concat(
  getLifeArr(5, 2, 16, 8).concat(getLifeArr(5, 2, 32, 16))
);
const indices = shuffleFisherYates([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
]);
const foo = Array(15).fill(0);
const mixedBalloons = Array(15).fill("green");
const blockBalloons = Array(15).fill("green");
for (let i = 0; i < 15; i++) {
  foo[indices[i]] = mixedCounts[i];
  if (i < 5) {
    mixedBalloons[indices[i]] = "red";
    blockBalloons[i] = "red";
  } else if (i < 10) {
    mixedBalloons[indices[i]] = "yellow";
    blockBalloons[i] = "yellow";
  }
}

mixedCounts = foo;

const trialCounts = mixedCounts.concat(blockCounts);
const practiceCounts = getLifeArr(3, lowerLim, upperLim, avg);
const ballonsColors = mixedBalloons.concat(blockBalloons);

const gameData = {
  trialCounts,
  ballonsColors,
};
const practiceData = {
  trialCounts: practiceCounts,
  ballonsColors,
};
export { gameData, practiceData };

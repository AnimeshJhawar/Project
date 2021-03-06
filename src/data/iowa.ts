/* eslint-disable import/prefer-default-export */
export const iowaData = {
  loanText: "Loan Amount: Rs. ",
  currentText: "Current Balance: Rs. ",
  won: "Won ",
  lost: "Lost ",
  practiceLastPage: "Practice Completed, Click To Play Game",
  lastPage:
    "Thank you for participating in the task. Please click here for the next task.",
  initialLoan: 225000,
  finalLimit: 225000 * 1.3,
};

export const iowaDataHindi = {
  loanText: "कर्जा (Rs): ",
  currentText: "कमाई (Rs): ",
  won: "रुपये जीते",
  lost: "रुपये हारे",
  practiceLastPage: "अभ्यास पूर्ण, खेल खेलने पर क्लिक करें",
  lastPage: "कार्य पूरा करने के लिए धन्यवाद। अगला कार्य खेलें",
  initialLoan: 225000,
  finalLimit: 225000 * 1.3,
};

// create data for cards here
const trialsCount = 40;
const cardsData: { [key: string]: { won: number; lost: number }[] } = {
  a: [
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 11200 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 18700 },
    { won: 7500, lost: 26200 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 26200 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 18700 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 11200 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 26200 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 18700 },
    { won: 7500, lost: 11200 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 26200 },
    { won: 7500, lost: 15000 },
    { won: 7500, lost: 18700 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 11200 },
    { won: 7500, lost: 22500 },
    { won: 7500, lost: 0 },
  ],
  b: [
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93700 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93700 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93700 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 93700 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 0 },
  ],
  c: [
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 1800 },
    { won: 3700, lost: 5600 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 1800 },
    { won: 3700, lost: 5600 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 1800 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 5600 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 1800 },
    { won: 3700, lost: 1800 },
    { won: 3700, lost: 5600 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 3700 },
    { won: 3700, lost: 5600 },
    { won: 3700, lost: 0 },
  ],
  d: [
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 18700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 18700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 18700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 18700 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
    { won: 3700, lost: 0 },
  ],
};

export const iowaGameData = {
  trialsCount,
  cardsData,
};

const practiceCount = 5;
const practiceData: { [key: string]: { won: number; lost: number }[] } = {
  a: [
    { won: 7500, lost: 5000 },
    { won: 1500, lost: 2000 },
    { won: 7500, lost: 3000 },
    { won: 1000, lost: 3000 },
    { won: 1500, lost: 3500 },
  ],
  b: [
    { won: 7500, lost: 3000 },
    { won: 1000, lost: 3000 },
    { won: 1500, lost: 3500 },
    { won: 7500, lost: 0 },
    { won: 7500, lost: 5000 },
  ],
  c: [
    { won: 1500, lost: 3500 },
    { won: 7500, lost: 0 },
    { won: 1000, lost: 2000 },
    { won: 3500, lost: 1000 },
    { won: 7500, lost: 5000 },
  ],
  d: [
    { won: 1000, lost: 2000 },
    { won: 3500, lost: 1000 },
    { won: 7500, lost: 5000 },
    { won: 1500, lost: 2000 },
    { won: 7500, lost: 5000 },
  ],
};

export const iowaPractceData = {
  trialsCount: practiceCount,
  cardsData: practiceData,
};

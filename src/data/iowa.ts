/* eslint-disable import/prefer-default-export */
export const iowaData = {
  won: "You won Rs.",
  lost: "You lost Rs.",
  lastPage:
    "Thank you for participating in the task. Please click here for the next task.",
  initialLoan: 5,
  finalLimit: 15,
};

// create data for cards here
const trialsCount = 6;
const cardsData = {
  a: [
    { won: 0, lost: 1 },
    { won: 1, lost: 1 },
    { won: 2, lost: 1 },
    { won: 3, lost: 1 },
    { won: 4, lost: 1 },
    { won: 5, lost: 1 },
  ],
  b: [
    { won: 0, lost: 2 },
    { won: 1, lost: 2 },
    { won: 2, lost: 1 },
    { won: 3, lost: 1 },
    { won: 4, lost: 1 },
    { won: 5, lost: 1 },
  ],
  c: [
    { won: 0, lost: 3 },
    { won: 1, lost: 3 },
    { won: 2, lost: 3 },
    { won: 3, lost: 3 },
    { won: 4, lost: 3 },
    { won: 5, lost: 3 },
  ],
  d: [
    { won: 0, lost: 4 },
    { won: 1, lost: 4 },
    { won: 2, lost: 4 },
    { won: 3, lost: 4 },
    { won: 4, lost: 4 },
    { won: 5, lost: 4 },
  ],
};

export const iowaGameData = {
  trialsCount,
  cardsData,
};

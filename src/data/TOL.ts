/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export const tolData = {
  finalHeading: "Target Stacks",
  wrongtext:
    "Trial Incomplete, You failed to complete the trial in numbers of moves required.",
  dragDropText: "Drag and Drop to achieve final position",
  dragRemainText: "Drops remaining",
  endedPractice: "Practice Finished",
  practiceEndButton: "Continue",
  startPractice: "Start TOL Practice",
  lastpageText: "Thank you for your participation",
  nextTrialButton: "Click here to start next trial",
};

export const toltrials: {
  stack: { id: string; color: string }[][];
  final: { id: string; color: string }[][];
  maxDrops: number;
}[] = [
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [],
      [
        { id: "3", color: "green" },
        { id: "2", color: "red" },
      ],
      [{ id: "1", color: "blue" }],
    ],
    maxDrops: 2,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [{ id: "2", color: "red" }],
      [{ id: "1", color: "blue" }],
      [{ id: "3", color: "green" }],
    ],
    maxDrops: 2,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [
        { id: "2", color: "red" },
        { id: "3", color: "green" },
      ],
      [{ id: "1", color: "blue" }],
      [],
    ],
    maxDrops: 3,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [{ id: "2", color: "red" }],
      [
        { id: "1", color: "blue" },
        { id: "3", color: "green" },
      ],
      [],
    ],
    maxDrops: 3,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [
        { id: "1", color: "blue" },
        { id: "2", color: "red" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    maxDrops: 4,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [{ id: "3", color: "green" }],
      [
        { id: "1", color: "blue" },
        { id: "2", color: "red" },
      ],
      [],
    ],
    maxDrops: 4,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [
        { id: "1", color: "blue" },
        { id: "3", color: "green" },
      ],
      [],
      [{ id: "2", color: "red" }],
    ],
    maxDrops: 4,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [],
      [
        { id: "1", color: "blue" },
        { id: "3", color: "green" },
      ],
      [{ id: "2", color: "red" }],
    ],
    maxDrops: 4,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [
        { id: "1", color: "blue" },
        { id: "2", color: "red" },
        { id: "3", color: "green" },
      ],
      [],
      [],
    ],
    maxDrops: 5,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [
        { id: "1", color: "blue" },
        { id: "3", color: "green" },
        { id: "2", color: "red" },
      ],
      [],
      [],
    ],
    maxDrops: 5,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [
        { id: "3", color: "green" },
        { id: "2", color: "red" },
      ],
      [{ id: "1", color: "blue" }],
      [],
    ],
    maxDrops: 5,
  },
  {
    stack: [
      [
        { id: "2", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "3", color: "green" }],
      [],
    ],
    final: [
      [{ id: "3", color: "green" }],
      [{ id: "1", color: "blue" }],
      [{ id: "2", color: "red" }],
    ],
    maxDrops: 5,
  },
];

export const practiceTrials = [
  ...toltrials.map((trial) => {
    return {
      stack: [
        ...trial.stack
          .map((t) => {
            return [...t].reverse();
          })
          .reverse(),
      ],
      final: [
        ...trial.final
          .map((t) => {
            return [...t].reverse();
          })
          .reverse(),
      ],
      maxDrops: trial.maxDrops,
    };
  }),
].slice(0, 2);

export const trials = [
  ...toltrials.map((trial) => {
    return {
      stack: [
        ...trial.stack
          .map((t) => {
            return [...t].reverse();
          })
          .reverse(),
      ],
      final: [
        ...trial.final
          .map((t) => {
            return [...t].reverse();
          })
          .reverse(),
      ],
      maxDrops: trial.maxDrops,
    };
  }),
];

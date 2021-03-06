/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export const tolData = {
  practiceText: "TOL Practice Trials",
  finalHeading: "Target Stacks",
  wrongtext: "Trial Incomplete",
  dragDropText: "Drag and Drop to achieve final position",
  dragRemainText: "Drops remaining",
  endedPractice: "Practice Finished",
  practiceEndButton: "Continue",
  startPractice: "Start TOL Practice",
  lastpageText: "Thank you for your participation",
  nextTrialButton: "Click here to start next trial",
  completed: "Task Completed",
  time: "Time",
};

export const tolDataHindi = {
  practiceText: "टोल प्रैक्टिस ट्रेल्स",
  finalHeading: "लक्ष्य पैटर्न",
  wrongtext: "Trial Incomplete",
  dragDropText: "अंतिम स्थिति प्राप्त करने के लिए गेंदों को खींचें और छोड़ें",
  dragRemainText: "शेष चालें",
  endedPractice: "अभ्यास समाप्त ",
  practiceEndButton: "जारी रखे ",
  startPractice: "Start TOL Practice",
  lastpageText: "कार्य पूरा करने के लिए धन्यवाद।",
  nextTrialButton: "अगला कार्य खेलें",
  completed: "Task Completed",
  time: "समय",
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

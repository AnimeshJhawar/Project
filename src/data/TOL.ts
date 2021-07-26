/* eslint-disable import/prefer-default-export */
export const tolData = {
  finalHeading: "Target Stacks",
  wrongtext:
    "Trial Incomplete, You failed to complete the trial in numbers of moves required.",
  dragDropText: "Drag and Drop to achieve final position",
  dragRemainText: "Drops remaining",
  lastpageText: "Thank you for your participation",
  nextTrialButton: "Click here to start next trial",
};

export const trials: {
  stack: { id: string; color: string }[][];
  final: { id: string; color: string }[][];
  maxDrops: number;
}[] = [
  {
    stack: [
      [{ id: "0", color: "blue" }],
      [{ id: "1", color: "red" }],
      [{ id: "2", color: "grey" }],
    ],
    final: [
      [],
      [
        { id: "0", color: "red" },
        { id: "1", color: "blue" },
      ],
      [{ id: "2", color: "grey" }],
    ],
    maxDrops: 4,
  },
];

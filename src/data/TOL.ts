/* eslint-disable import/prefer-default-export */
export const tolData = {
  finalHeading: "Target Stacks",
  dragDropText: "Drag and Drop to achieve final position",
  dragRemainText: "Drops remaining",
  lastpageText: "Thank you for your participation",
};

export const trials: {
  stack: { id: string; color: string }[][];
  final: { id: string; color: string }[][];
  maxDrops: number;
}[] = [
  {
    stack: [
      [
        { id: "1", color: "blue" },
        { id: "2", color: "green" },
      ],
      [
        { id: "3", color: "red" },
        { id: "4", color: "green" },
      ],
      [
        { id: "5", color: "grey" },
        { id: "6", color: "blue" },
        { id: "7", color: "red" },
        { id: "8", color: "blue" },
      ],
    ],
    final: [
      [{ id: "2", color: "green" }],
      [
        { id: "3", color: "red" },
        { id: "1", color: "blue" },
        { id: "4", color: "green" },
      ],
      [
        { id: "5", color: "grey" },
        { id: "6", color: "blue" },
        { id: "7", color: "red" },
        { id: "8", color: "blue" },
      ],
    ],
    maxDrops: 4,
  },
  {
    stack: [
      [
        { id: "1", color: "blue" },
        { id: "2", color: "green" },
      ],
      [
        { id: "3", color: "red" },
        { id: "4", color: "green" },
      ],
      [
        { id: "5", color: "grey" },
        { id: "6", color: "blue" },
        { id: "7", color: "red" },
        { id: "8", color: "blue" },
      ],
    ],
    final: [
      [{ id: "2", color: "green" }],
      [
        { id: "3", color: "red" },
        { id: "1", color: "blue" },
        { id: "4", color: "green" },
      ],
      [
        { id: "5", color: "grey" },
        { id: "6", color: "blue" },
        { id: "7", color: "red" },
        { id: "8", color: "blue" },
      ],
    ],
    maxDrops: 4,
  },
  {
    stack: [
      [
        { id: "1", color: "blue" },
        { id: "2", color: "green" },
      ],
      [
        { id: "3", color: "red" },
        { id: "4", color: "green" },
      ],
      [
        { id: "5", color: "grey" },
        { id: "6", color: "blue" },
        { id: "7", color: "red" },
        { id: "8", color: "blue" },
      ],
    ],
    final: [
      [{ id: "2", color: "green" }],
      [
        { id: "3", color: "red" },
        { id: "1", color: "blue" },
        { id: "4", color: "green" },
      ],
      [
        { id: "5", color: "grey" },
        { id: "6", color: "blue" },
        { id: "7", color: "red" },
        { id: "8", color: "blue" },
      ],
    ],
    maxDrops: 4,
  },
];

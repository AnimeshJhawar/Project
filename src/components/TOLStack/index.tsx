/* eslint-disable no-return-assign */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { tolData } from "../../data/TOL";
import { TOLChip } from "../TOLChip";
import style from "./style.module.css";

export interface TOLStackProps {
  stackList: { id: string; color: string }[][];
  finalList: { id: string; color: string }[][];
  width: string;
  sendResult: Function;
  maxDrops: number;
}

function colorStackFromStack(stackList: TOLStackProps["stackList"]) {
  return [...stackList.map((stack) => [...stack.map((disc) => disc.color)])];
}

export const TOLStack: React.FC<TOLStackProps> = ({
  stackList = [
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
  finalList = [
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
  maxDrops = 4,
  width = "100px",
  sendResult = () => null,
}) => {
  const [stacksUpdated, setStacksUpdated] = useState(stackList);
  const [end, setEnd] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [dragDropCounts, setDragDropCounts] = useState(0);

  let totalDraggables = 0;
  stackList.map((stack) => stack.map((e) => (totalDraggables += 1)));

  function addAfter(array: any, index: number, newItem: any) {
    return [...array.slice(0, index), newItem, ...array.slice(index)];
  }

  function onDragEnd(result: any) {
    const { destination, source, draggableId } = result;

    if (destination === null) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      return;
    }

    const sourceStack = stacksUpdated[source.droppableId];
    const draggedDisc = sourceStack.find((disc) => disc.id === draggableId);
    const destinationStack = stacksUpdated[destination.droppableId];

    const updatedSource = addAfter(
      [...stacksUpdated.filter((stack) => stack !== sourceStack)],
      parseInt(source.droppableId, 10),
      sourceStack.filter((disc) => disc.id !== draggableId)
    );

    const finalUpdate = addAfter(
      [...updatedSource.filter((stack) => stack !== destinationStack)],
      parseInt(destination.droppableId, 10),
      [draggedDisc, ...destinationStack]
    );

    setStacksUpdated(finalUpdate);
    setDragDropCounts(dragDropCounts + 1);
  }

  useEffect(() => {
    if (
      JSON.stringify(colorStackFromStack(stacksUpdated)) ===
      JSON.stringify(colorStackFromStack(finalList))
    ) {
      setIsCorrect(true);
      setEnd(true);
    } else if (maxDrops === dragDropCounts) {
      setIsCorrect(false);
      setEnd(true);
    }
  }, [stacksUpdated]);
  return (
    <div className={style.mainStacksCont}>
      <div className={style.header}>
        {" "}
        {tolData.dragRemainText} : {maxDrops - dragDropCounts}{" "}
      </div>

      <>
        {end ? (
          <strong> Result: {isCorrect ? "Correct" : "Wrong"}</strong>
        ) : (
          <strong> {tolData.finalHeading}</strong>
        )}
        <div className={style.container}>
          {finalList.map((stack, index) => (
            <div
              className={style.stack}
              style={{
                width,
                minHeight: `${totalDraggables * 30}px`,
              }}
            >
              {stack.map((disc, idx) => (
                <TOLChip
                  key={disc.id}
                  id={disc.id}
                  color={disc.color}
                  index={idx}
                />
              ))}
            </div>
          ))}
        </div>
        {end ? (
          <div className={style.container}>
            {finalList.map((stack, index) => (
              <div
                className={style.stack}
                style={{
                  width,
                  minHeight: `${totalDraggables * 30}px`,
                }}
              >
                {stack.map((disc, idx) => (
                  <TOLChip
                    key={disc.id}
                    id={disc.id}
                    color={disc.color}
                    index={idx}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className={style.container}>
            <DragDropContext onDragEnd={onDragEnd}>
              {stacksUpdated.map((stack, index) => (
                <Droppable
                  droppableId={index.toString()}
                  key={index.toString()}
                >
                  {(provided: any) => (
                    <div
                      className={style.stack}
                      style={{
                        width,
                        minHeight: `${totalDraggables * 30}px`,
                      }}
                      {...provided.droppabdle}
                      ref={provided.innerRef}
                    >
                      {stack.map((disc, idx) => (
                        <TOLChip
                          key={disc.id}
                          id={disc.id}
                          color={disc.color}
                          index={idx}
                          draggable
                        />
                      ))}
                    </div>
                  )}
                </Droppable>
              ))}
            </DragDropContext>
          </div>
        )}

        <strong> {tolData.dragDropText}</strong>
      </>
    </div>
  );
};

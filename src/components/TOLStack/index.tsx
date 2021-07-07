/* eslint-disable no-return-assign */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { tolData } from "../../data/TOL";
import { CustomButton } from "../CustomButton";
import { TOLChip } from "../TOLChip";
import style from "./style.module.css";

export interface TOLStackProps {
  stackList: { id: string; color: string }[][];
  finalList: { id: string; color: string }[][];
  maxDrops: number;
  sendResult?: Function;
  width?: string;
  stackIndex: number;
}

function colorStackFromStack(stackList: TOLStackProps["stackList"]) {
  return [...stackList.map((stack) => [...stack.map((disc) => disc.color)])];
}

export const TOLStack: React.FC<TOLStackProps> = ({
  stackList = [],
  finalList = [],
  maxDrops = 5,
  width = "100px",
  sendResult = () => null,
  stackIndex,
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
    if (draggableId !== stacksUpdated[source.droppableId][0].id) {
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
      <div className={style.tolColumn}>
        <strong style={{ width: "fit-content" }}>{tolData.finalHeading}</strong>
        <div className={style.tolStacks}>
          <div className={style.finalcontainer}>
            {finalList.map((stack, index) => (
              <div
                className={style.stack}
                style={{
                  width,
                  minHeight: `${totalDraggables * 30}px`,
                }}
              >
                <div className={style.stackStick}> </div>

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
          <div className={style.container}>
            <div className={style.container} style={{ paddingBottom: "50px" }}>
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
                        <div className={style.stackStick}> </div>
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
          </div>
          <strong> {!end && tolData.dragDropText}</strong>
        </div>
        <div className={style.status}>
          {tolData.dragRemainText} : {maxDrops - dragDropCounts} <br />
          {end ? (
            <>
              <strong>
                {isCorrect ? "Trial Complete" : tolData.wrongtext}
              </strong>
              <br />

              <CustomButton
                text={tolData.nextTrialButton}
                onClick={() =>
                  sendResult(isCorrect, dragDropCounts, stackIndex)
                }
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import { TOLChip } from "../TOLChip";
import style from "./style.module.css";

export interface TOLStackProps {
  stackList: { id: string; color: string }[][];
  width: string;
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
  width = "100px",
}) => {
  const [stacksUpdated, setStacksUpdated] = useState(stackList);

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

    console.log(updatedSource, draggedDisc);
    const finalUpdate = addAfter(
      [...updatedSource.filter((stack) => stack !== destinationStack)],
      parseInt(destination.droppableId, 10),
      [draggedDisc, ...destinationStack]
    );

    setStacksUpdated(finalUpdate);

    // setStacksUpdated(
    //   addAfter(
    //     [...updatedSource.filter((stack) => stack !== destinationStack)],
    //     parseInt(destination.droppableId, 10),
    //     [
    //       ...destinationStack,
    //       destinationStack.find((disc) => disc.id === draggableId),
    //     ]
    //   )
    // );
    // console.log(result);
  }
  return (
    <div className={style.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        {stacksUpdated.map((stack, index) => (
          <Droppable droppableId={index.toString()} key={index.toString()}>
            {(provided: any) => (
              <div
                className={style.stack}
                style={{
                  width,
                }}
                {...provided.droppabdle}
                ref={provided.innerRef}
              >
                {provided.placeholder}
                {stack.map((disc, idx) => (
                  <TOLChip
                    key={disc.id}
                    id={disc.id}
                    color={disc.color}
                    index={idx}
                  />
                ))}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

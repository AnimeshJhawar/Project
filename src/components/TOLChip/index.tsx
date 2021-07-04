/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import Color from "color";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import style from "./style.module.css";

export interface TOLChipProps {
  color?: string;
  height?: string;
  id?: string;
  index?: number;
}

export const TOLChip: React.FC<TOLChipProps> = ({
  color = "blue",
  height = "25px",
  id = "",
  index = 1,
}) => {
  const shadowColor = Color(color).alpha(0.3);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided: any) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={style.disc}
          style={{
            height,
            backgroundColor: color,
            boxShadow: `0px 4px ${shadowColor}`,
            ...provided.draggableProps.style,
          }}
        >
          {" "}
        </div>
      )}
    </Draggable>
  );
};

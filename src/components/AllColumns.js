import React, { useContext } from "react";
import Column from "./Column";
import DrgDrpContext from "../provider/DnDProvider";
import { DragDropContext } from "react-beautiful-dnd";

const AllColumns = (props) => {
  const { columns, onDragEnd } = useContext(DrgDrpContext);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex" }}>
        {
          columns.map((column, index) => (
            <Column
              key={column.id}
              index={index}
              column={column}
            />
          ))
        }
      </div>
    </DragDropContext>
  );
}

export default AllColumns;

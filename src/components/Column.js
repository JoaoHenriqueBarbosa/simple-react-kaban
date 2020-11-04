import React from "react";
import AllCards from "./AllCards";
import { Droppable } from "react-beautiful-dnd";
import AddCard from "./AddCard";
import ColumnHeader from "./ColumnHeader";

const Column = React.memo(({ column }) => {
  return (
    <div style={{ border: "solid 1px", padding: 10 }}>
      <ColumnHeader column={column} />
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          // isDraggingOver={snapshot.isDraggingOver}
          >
            <AllCards cards={column.cards} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddCard column={column} />
    </div>
  );
});

export default Column;

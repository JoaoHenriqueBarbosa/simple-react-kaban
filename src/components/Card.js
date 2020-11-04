import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import DrgDrpContext from "../provider/DnDProvider";

const Card = React.memo(({ card, index, column }) => {

  const { removeCard } = useContext(DrgDrpContext);

  const onClick = () => {
    removeCard(card.id);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {card.content}
          <button onClick={onClick}>x</button>
        </div>
      )}
    </Draggable>
  );
});

export default Card;

import React, { useState } from "react";

const DrgDrpContext = React.createContext();

export const DragDropProvider = ({ children, defaultValue }) => {

  let [state, setState] = useState(defaultValue || { columns: [] });

  const getColumn = id => state.columns.find(col => col.id === id);

  const moveCard = (column, from, to) => {
    let numberOfDeletedCard = 1;

    const card = column.splice(from, numberOfDeletedCard)[0];

    numberOfDeletedCard = 0;

    column.splice(to, numberOfDeletedCard, card);
  }

  const onDragEnd = (result) => {
    const { draggableId, destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = getColumn(source.droppableId);
    const endColumn = getColumn(destination.droppableId);

    let card;

    state.columns.forEach(col => {
      let aux = col.cards.filter(c => c.id === draggableId);

      if (aux.length > 0) {
        card = aux[0];
      }
    });

    if (startColumn === endColumn) {
      const column = getColumn(source.droppableId);
      const newCards = [...column.cards];

      moveCard(newCards, source.index, destination.index);

      column.cards = newCards;

      state.columns[state.columns.indexOf(column)] = column;

      setState({
        ...state,
        columns: state.columns
      });

      return;
    }

    const newStartCards = [...startColumn.cards];
    const newEndCards = [...endColumn.cards];

    newStartCards.splice(source.index, 1);
    newEndCards.splice(destination.index, 0, card);

    const newStartColumn = {
      ...startColumn,
      cards: newStartCards,
    };

    const newEndColumn = {
      ...endColumn,
      cards: newEndCards,
    };

    state.columns[state.columns.indexOf(startColumn)] = newStartColumn;
    state.columns[state.columns.indexOf(endColumn)] = newEndColumn;

    setState({
      ...state,
      columns: state.columns
    });
  };

  const removeCard = (id) => {

    setState(st => {
      const auxCols = [...st.columns];
      const newCols = [];

      for (let i = 0; i < auxCols.length; i++) {
        const col = auxCols[i];
        const newCards = [...col.cards];
        const card = newCards.find(c => c.id === id);

        if (card) {
          const index = newCards.indexOf(card);
          newCards.splice(index, 1);

          const newCol = {
            ...col,
            cards: newCards
          };

          newCols.push(newCol);
        } else {
          newCols.push(col);
        }
      }

      console.log(newCols);

      return {
        ...st,
        columns: newCols
      };
    });
  }

  const addCard = (cardData, columnId) => {

    const column = getColumn(columnId);

    const newCards = [...column.cards];
    newCards.push({
      id: "card" + new Date().getTime(),
      ...cardData
    });

    const newColumn = {
      ...column,
      cards: newCards,
    };

    state.columns[state.columns.indexOf(column)] = newColumn;

    setState({
      ...state,
      columns: state.columns
    });
  }

  const editColumn = (columnData, columnId) => {

    const column = getColumn(columnId);

    const newColumn = {
      ...column,
      ...columnData
    };

    state.columns[state.columns.indexOf(column)] = newColumn;

    setState({
      ...state,
      columns: state.columns
    });
  }

  const setData = (data) => {
    setState(data);
  }

  return (
    <DrgDrpContext.Provider
      value={{
        columns: state.columns,
        onDragEnd,
        removeCard,
        addCard,
        editColumn,
        setData
      }}
    >
      {children}
    </DrgDrpContext.Provider>
  );
};

export default DrgDrpContext;
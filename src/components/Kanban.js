import React from 'react';
import { DragDropProvider } from '../provider/DnDProvider';
import AllColumns from './AllColumns';

const Kanban = ({ defaultValue }) => {
  return (
    <DragDropProvider defaultValue={defaultValue} >
      <AllColumns />
    </DragDropProvider>
  )
}

export default Kanban;
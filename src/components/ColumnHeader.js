import React, { useState, useContext } from "react";
import DrgDrpContext from "../provider/DnDProvider";

const ColumnHeader = ({ column }) => {

  const { editColumn } = useContext(DrgDrpContext);

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(column.title);

  const openForm = ev => {
    ev.preventDefault();
    setEditing(true);
  }

  const cancel = ev => {
    ev.preventDefault();
    setEditing(false);
  }

  const submit = ev => {
    ev.preventDefault();
    setEditing(false);
    editColumn({ title }, column.id);
  }

  return (
    <div style={{ marginBottom: 20, marginTop: 10 }}>
      {
        editing && (
          <div>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={submit}>Confirm</button>
            <button onClick={cancel}>Cancel</button>
          </div>
        )
      }
      {
        !editing && (
          <div style={{ display: "flex" }}>
            <strong>{column.title}</strong>
            <button onClick={openForm}>Rename</button>
          </div>
        )
      }
    </div>
  )
}

export default ColumnHeader;

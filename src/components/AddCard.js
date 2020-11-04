import React, { useState, useContext } from "react";
import DrgDrpContext from "../provider/DnDProvider";

const AddCard = ({ column }) => {

  const { addCard } = useContext(DrgDrpContext);

  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState("");

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
    addCard({ content }, column.id);
    setContent("");
  }

  return (
    <div>
      {
        editing && (
          <div>
            <input placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={submit}>Add</button>
            <button onClick={cancel}>Cancel</button>
          </div>
        )
      }
      {
        !editing && (
          <button onClick={openForm}>+</button>
        )
      }
    </div>
  )
}

export default AddCard;

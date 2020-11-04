import React from "react";
import Kanban from "./components/Kanban";

const initialData = {
  columns: [
    {
      id: "column-1",
      title: "Backlog",
      cards: [
        { id: "card-1", content: "Data Analytics" },
        { id: "card-2", content: "Branding Guidelines" },
        { id: "card-3", content: "Android App" },
      ],
    },
    {
      id: "column-2",
      title: "Planning",
      cards: [
        { id: "card-4", content: "New Landing Page" },
      ],
    },
    {
      id: "column-3",
      title: "Doing",
      cards: [
        { id: "card-5", content: "Mobile UI Reboot" },
        { id: "card-6", content: "CSS Rules" },
      ],
    },
    {
      id: "column-4",
      title: "Done",
      cards: [],
    }
  ]
};

const App = () => {
  return (
    <Kanban defaultValue={initialData} />
  );
}

export default App;

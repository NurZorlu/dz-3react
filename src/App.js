import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";

const tasks = [
  { id: 1, name: "Milk" },
  { id: 2, name: "Butter" },
  { id: 3, name: "Bread" },
  { id: 4, name: "Meat" },
];

function App() {
  const [list, setList] = useState(tasks);
  const [query, setQuery] = useState("");

  const handleFilterOnClick = (query) => {
    setQuery("");

    setList([...list, { id: list.lenght + 1, name: query }]);
  };
  return (
    <div className="App">
      <Input value={query} setValue={setQuery} />
      <Button onClick={handleFilterOnClick} query={query} />
      {list.map((task) => {
        return <Task key={task.id} name={task.name} />;
      })}
    </div>
  );
}

export default App;

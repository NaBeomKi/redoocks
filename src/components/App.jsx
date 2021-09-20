import React from "react";
import Add from "./Add";
import { useToDoState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

function App() {
  const { toDos, completed } = useToDoState();

  return (
    <div className="App">
      <h1>Add To Do</h1>
      <Add />
      <List name="To Do Lists">
        {toDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            id={toDo.id}
            isCompleted={false}
          />
        ))}
      </List>
      <List name={completed.length ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            text={toDo.text}
            id={toDo.id}
            isCompleted={true}
          />
        ))}
      </List>
    </div>
  );
}

export default App;

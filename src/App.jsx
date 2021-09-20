import { useReducer, useState } from "react";
import reducer, {
  initState,
  ADD,
  DELETE,
  COMPLETE,
  UNCOMPLETE,
} from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    dispatch({ type: ADD, payload: text });
    setText("");
  };

  return (
    <div className="App">
      <h1>Add To Do</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Write To Do"
        />
        <button>Add</button>
      </form>
      <div>
        <h2>To Do Lists</h2>
        <ul>
          {state.toDos.map((toDo) => (
            <li key={toDo.id} id={toDo.id}>
              <span>{toDo.text}</span>
              <button
                onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
              >
                ❌
              </button>
              <button
                onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
              >
                ✅
              </button>
            </li>
          ))}
        </ul>
      </div>
      {state.completed.length !== 0 && (
        <div>
          <h2>Completed</h2>
          <ul>
            {state.completed.map((toDo) => (
              <li key={toDo.id} id={toDo.id}>
                <span>{toDo.text}</span>
                <button
                  onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
                >
                  ❌
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  🔙
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

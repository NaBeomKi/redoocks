import React, { useRef, useState } from "react";
import { COMPLETE, DELETE, EDIT, UNCOMPLETE } from "../actions";
import { useDispatch } from "../context";

const ToDo = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch({ type: EDIT, payload: { text: value, id } });
    setActive(false);
    setValue("");
  };

  return (
    <li id={id}>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DELETE, payload: id })}>
        ❌
      </button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "🔙" : "✅"}
      </button>
      <button
        onClick={() => {
          setActive(true);
          inputRef.current.focus();
        }}
      >
        🖋
      </button>
      <form
        style={{ display: active ? "block" : "none" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Edit Text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
        />
        <button>EDIT</button>
      </form>
    </li>
  );
};

export default ToDo;

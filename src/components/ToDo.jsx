import React from "react";
import { COMPLETE, DELETE, UNCOMPLETE } from "../actions";
import { useDispatch } from "../context";

const ToDo = ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();

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
    </li>
  );
};

export default ToDo;

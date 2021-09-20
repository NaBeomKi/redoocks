import React, { useRef, useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

const Add = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    dispatch({ type: ADD, payload: text });
    setText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Write To Do"
        ref={inputRef}
      />
      <button>Add</button>
    </form>
  );
};

export default Add;

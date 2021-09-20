import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

const Add = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Write To Do"
      />
      <button>Add</button>
    </form>
  );
};

export default Add;

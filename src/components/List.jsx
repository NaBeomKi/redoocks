import React from "react";

const List = ({ name, children }) => {
  return (
    <>
      <h2>{name}</h2>
      <ul>{children}</ul>
    </>
  );
};

export default List;

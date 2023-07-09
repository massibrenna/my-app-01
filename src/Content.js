import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ItemList from "./ItemList";
const Content = (props) => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Niko");

  const handleChangeName = () => {
    const names = ["Max", "Niko", "Vero"];
    const int = Math.floor(Math.random() * 3);
    console.log(names[int]);

    console.log(`P clicked ${name} count ${count}`);

    setName(names[int]);
    setCount(count + 1);

    console.log(`D clicked ${name} count ${count}`);
  };

  const handleClick = () => {
    console.log(`P clicked count ${count}`);
    setCount(count + 1);
    console.log(`D clicked count ${count}`);
    console.log(`clicked name ${name}`);
  };
  const handleClick2 = (name) => {
    console.log(`${name} clicked!`);
  };
  return (
    <>
      <p>
        name: {name} count: {count}
      </p>
      <button onClick={handleClick}>Click it!</button>
      <button onClick={() => handleClick2("Max")}>params passes</button>
      <button onClick={handleChangeName}>ChangeName</button>

      {props.items.length ? (
        <ItemList
          items={props.items}
          handleCheck={props.handleCheck}
          handleDelete={props.handleDelete}
        ></ItemList>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </>
  );
};

export default Content;

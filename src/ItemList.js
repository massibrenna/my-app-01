import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import LineItem from "./LineItem";
const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={props.handleCheck}
          handleDelete={props.handleDelete}
        ></LineItem>
      ))}
    </ul>
  );
};

export default ItemList;

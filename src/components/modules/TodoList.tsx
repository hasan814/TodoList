import { TodoListProps } from "src/types";

import TodoItem from "./TodoItem";
import React from "react";

const TodoList: React.FC<TodoListProps> = ({
  items,
  clearList,
  handleEdit,
  handleDelete,
}) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>

      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          handleEdit={() => handleEdit(item)}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}

      <button
        onClick={clearList}
        className="btn btn-danger d-block text-capitalize mt-5"
      >
        Clear List
      </button>
    </ul>
  );
};

export default TodoList;

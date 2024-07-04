import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { TodoItemProps } from "src/types";

import React from "react";

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{text}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success cursor-pointer" onClick={handleEdit}>
          <MdEdit />
        </span>
        <span className="mx-2 text-success" onClick={handleDelete}>
          <MdDeleteOutline />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;

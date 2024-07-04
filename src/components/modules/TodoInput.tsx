import { TodoInputProps } from "src/types";
import { MdOutlineBook } from "react-icons/md";

import React from "react";

const TodoInput: React.FC<TodoInputProps> = ({
  item,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group align-items-center">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <MdOutlineBook />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            value={item}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn d-block w-100 btn-primary mt-3 mx-auto text-capitalize"
        >
          add item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;

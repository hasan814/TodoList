"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "src/types";
import { Row } from "react-bootstrap";

import TodoInput from "@/modules/TodoInput";
import TodoList from "@/modules/TodoList";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  // =========== Router ===========
  const router = useRouter();

  // =========== State ===========
  const [items, setItems] = useState<TodoItem[]>([]);
  const [id, setId] = useState<string>(uuidv4());
  const [item, setItem] = useState<string>("");
  const [editItem, setEditItem] = useState<boolean>(false);

  // =========== Effect ===========
  useEffect(() => {
    const savedItems = Cookies.get("todo-items");
    if (savedItems) setItems(JSON.parse(savedItems));
  }, []);

  // =========== Function ===========
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newItem: TodoItem = {
      id: uuidv4(),
      text: item,
    };
    const updatedItem = [...items, newItem];
    setItems(updatedItem);
    setItem("");
    setId(uuidv4());
    setEditItem(false);
    Cookies.set("todo-items", JSON.stringify(updatedItem), { expires: 7 });
    router.refresh();
  };

  const clearList = () => {
    setItems([]);
    Cookies.remove("todo-items");
    router.refresh();
  };

  const handleEdit = (item: TodoItem) => {
    setItem(item.text);
    setEditItem(true);
    setItems(items.filter((item) => item.id !== item.id));
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };
  // =========== Rendering ===========
  return (
    <Row>
      <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">todo input</h3>
        <TodoInput
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TodoList
          items={items}
          clearList={clearList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </Row>
  );
};

export default HomePage;

import { ChangeEvent, FormEvent } from "react";

// src/types/index.ts
export interface TodoItem {
  id: string;
  text: string;
}

export interface TodoInputProps {
  item: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export interface TodoListProps {
  items: TodoItem[];
  clearList: () => void;
  handleEdit: (item: TodoItem) => void;
  handleDelete: (id: string) => void;
}

export interface TodoItemProps {
  text: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import type { Todo } from "../types";
import { getInitialData, persistData } from "../helpers/persistStore.helpers";

const defaultValue: Todo[] = [
  {
    id: uuid(),
    content: "Complete online JavaScript course",
    completed: true,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    content: "Jog around the park 3x",
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    content: "10 minutes meditation",
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    content: "Read for 1 hour",
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    content: "Pick up groceries",
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    content: "Complete Todo App on Frontend Mentor",
    completed: false,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

export const todos = writable<Todo[]>(getInitialData({ defaultValue, key: "todos" }));

// Sync store & localStorage
todos.subscribe((data) => persistData({ data, key: "todos" }));

// Create Todo
export const createTodo = (content: Todo["content"]) =>
  todos.update((current) => [
    { id: uuid(), content, completed: false, createdAt: Date.now(), updatedAt: Date.now() },
    ...current,
  ]);

// Toggle Completed
export const toggleTodoCompleted = (id: Todo["id"]) => {
  console.log("toggle");
  todos.update((current) => [
    ...current.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed, updatedAt: Date.now() } : todo)),
  ]);
};

// Delete Todo
export const deleteTodo = (id: Todo["id"]) => todos.update((current) => current.filter((todo) => todo.id !== id));

// Delete completed
export const deleteCompletedTodos = () => todos.update((current) => current.filter((todo) => !todo.completed));

// Sort todos after drag event
export const updateTodosOrder = (previous: number, next: number) =>
  todos.update((todos) => {
    console.log("update todos");
    const todo = todos[previous];
    const newArr = [...todos];
    newArr.splice(previous, 1);
    newArr.splice(next, 0, todo);
    return newArr;
  });

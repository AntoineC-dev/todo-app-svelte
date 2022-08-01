import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";
import type { Todo } from "../types";

const initialTodos: Todo[] = [
  { id: uuid(), content: "Complete online JavaScript course", completed: true },
  { id: uuid(), content: "Jog around the park 3x", completed: false },
  { id: uuid(), content: "10 minutes meditation", completed: false },
  { id: uuid(), content: "Read for 1 hour", completed: false },
  { id: uuid(), content: "Pick up groceries", completed: false },
  { id: uuid(), content: "Complete Todo App on Frontend Mentor", completed: false },
];

export const todosStore = writable<Todo[]>(initialTodos);

// Create Todo
export const createTodo = (content: Todo["content"]) =>
  todosStore.update((current) => [...current, { id: uuid(), content, completed: false }]);

// Toggle Completed
export const toggleTodoCompleted = (id: Todo["id"]) =>
  todosStore.update((current) => [
    ...current.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
  ]);

// Delete Todo
export const deleteTodo = (id: Todo["id"]) => todosStore.update((current) => current.filter((todo) => todo.id !== id));

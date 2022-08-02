export type Theme = "light" | "dark";

export interface Todo {
  id: string;
  content: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

export type LocalStorageKeys = "theme" | "todos" | "filter";

export type Filter = "all" | "active" | "completed";

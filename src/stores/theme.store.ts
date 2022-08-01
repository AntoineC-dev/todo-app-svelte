import { writable } from "svelte/store";
import { browser } from "$app/env";
import type { Theme } from "../types";

export const theme = writable<Theme>(
  browser && localStorage.getItem("theme") ? (localStorage.getItem("theme") as Theme) : "light"
);

theme.subscribe((current) => browser && localStorage.setItem("theme", current));

export const toggleTheme = () => theme.update((curr) => (curr === "light" ? "dark" : "light"));

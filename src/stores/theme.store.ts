import { writable } from "svelte/store";
import { browser } from "$app/env";
import type { Theme } from "../types";

const defaultTheme: Theme = "light";
const initialValue = browser ? (window.localStorage.getItem("theme") as Theme) ?? defaultTheme : defaultTheme;

export const theme = writable<Theme>(initialValue);

// Sync store & localStorage
theme.subscribe((current) => {
  if (browser) {
    window.localStorage.setItem("theme", current);
  }
});

// Toggle theme
export const toggleTheme = () => theme.update((curr) => (curr === "light" ? "dark" : "light"));

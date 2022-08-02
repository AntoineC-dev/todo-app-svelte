import { writable } from "svelte/store";
import type { Theme } from "../types";
import { getInitialData, persistData } from "../helpers/persistStore.helpers";

const defaultValue: Theme = "light";

export const theme = writable<Theme>(getInitialData({ defaultValue, key: "theme" }));

// Sync store & localStorage
theme.subscribe((data) => persistData({ data, key: "theme" }));

// Toggle theme
export const toggleTheme = () => theme.update((curr) => (curr === "light" ? "dark" : "light"));

import { writable } from "svelte/store";
import type { Theme } from "../types";
import { getPersistedData, updatePersistedData } from "../helpers/persistStore.helper";

// export const theme = writable<Theme>(getPersistedData("theme") ?? "light");
export const theme = writable<Theme>("light");

// Sync store & localStorage
// theme.subscribe((current) => updatePersistedData("theme", current));

// Toggle theme
export const toggleTheme = () => theme.update((curr) => (curr === "light" ? "dark" : "light"));

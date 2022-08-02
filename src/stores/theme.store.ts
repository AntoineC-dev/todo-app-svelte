import { writable } from "svelte/store";
import type { Theme } from "../types";
import { getPersistedData, updatePersistedData } from "../helpers/persistStore.helper";

// export const theme = writable<Theme>(getPersistedData("theme") ?? "light");
export const theme = writable<Theme>("light");

// export const getThemeFromStorage = async () => {
//   if (!localStorage.getItem("theme")) return null;
//   try {
//     const data = await JSON.parse(localStorage.getItem("theme") as string);
//     return data;
//   } catch (error) {
//     console.log("Local storage error");
//     console.log(error);
//   }
// };

// Sync store & localStorage
theme.subscribe((current) => updatePersistedData("theme", current));

// Toggle theme
export const toggleTheme = () => theme.update((curr) => (curr === "light" ? "dark" : "light"));

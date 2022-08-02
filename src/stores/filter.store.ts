import { getPersistedData, updatePersistedData } from "../helpers/persistStore.helper";
import { writable } from "svelte/store";
import type { Filter, Todo } from "../types";

export const filters: Filter[] = ["all", "active", "completed"];

// export const filter = writable<Filter>(getPersistedData("filter") ?? "all");
export const filter = writable<Filter>("all");

// Sync store & localStorage
// filter.subscribe((current) => updatePersistedData("filter", current));

// Create Todo
export const setFilter = (newFilter: Filter) => filter.set(newFilter);

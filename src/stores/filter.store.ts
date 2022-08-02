import { writable } from "svelte/store";
import type { Filter } from "../types";

const defaultValue: Filter = "all";
export const filter = writable<Filter>(defaultValue);

export const filters: Filter[] = ["all", "active", "completed"];

// Set current filter
export const setFilter = (newFilter: Filter) => filter.set(newFilter);

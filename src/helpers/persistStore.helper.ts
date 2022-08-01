import { browser } from "$app/env";
import type { LocalStorageKeys } from "../types";

export const getPersistedData = (key: LocalStorageKeys) => {
  if (!browser) return null;
  if (!localStorage.getItem(key)) return null;
  return JSON.parse(localStorage.getItem(key) as string);
};

export const updatePersistedData = <T>(key: LocalStorageKeys, data: T) => {
  browser && localStorage.setItem(key, JSON.stringify(data));
};

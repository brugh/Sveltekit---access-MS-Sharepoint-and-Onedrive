import { browser } from "$app/environment";
import { writable } from "svelte/store";

const createWritableStore = (key: string, startValue: any) => {
  const { subscribe, set } = writable(startValue);
  return {
    subscribe,
    set,
    useLocalStorage: () => {
      if (!browser) return;
      const json = localStorage.getItem(key);
      if (json) set(JSON.parse(json));
      subscribe(val => localStorage.setItem(key, JSON.stringify(val)));
    }
  };
}

export const user: any | null = writable(null);
export const siteId = createWritableStore('defaultSite', '')
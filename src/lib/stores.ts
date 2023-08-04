import { writable } from "svelte/store";

export const user: any | null = writable(null);
export const siteId = writable();
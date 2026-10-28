import type { HTMLButtonAttributes } from "svelte/elements";

export type ThemeOptions = "light" | "dark" | "gruvbox";

export type ButtonProps = HTMLButtonAttributes & {  
    accent?: string
};
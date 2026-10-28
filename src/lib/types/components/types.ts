import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

export type ThemeOptions = "light" | "dark" | "gruvbox";

type ButtonOnlyProps = { accent?: string };
export type ButtonProps = ButtonOnlyProps & HTMLButtonAttributes;

export type LinkButtonProps = ButtonOnlyProps & HTMLAnchorAttributes;
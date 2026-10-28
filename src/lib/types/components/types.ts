import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLInputAttributes } from "svelte/elements";

export type ThemeOptions = "light" | "dark" | "gruvbox";

type ButtonOnlyProps = { accent?: string };
export type ButtonProps = ButtonOnlyProps & HTMLButtonAttributes;

export type LinkButtonProps = ButtonOnlyProps & HTMLAnchorAttributes;

type TextInputOnlyProps = { type: "text" | "password" | "email", label: string, errors?: string[] };
export type TextInputProps = TextInputOnlyProps & HTMLInputAttributes;
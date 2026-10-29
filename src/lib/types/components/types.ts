import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLInputAttributes, HTMLSelectAttributes } from "svelte/elements";

export type ThemeOptions = "light" | "dark" | "gruvbox";

type ButtonOnlyProps = { accent?: string };
export type ButtonProps = ButtonOnlyProps & HTMLButtonAttributes;

export type LinkButtonProps = ButtonOnlyProps & HTMLAnchorAttributes;

type TextInputOnlyProps = { type: "text" | "password" | "email", label: string, errors?: string[], hideLabel?: boolean };
export type TextInputProps = TextInputOnlyProps & HTMLInputAttributes;

type SelectInputOnlyOptions = { options: string[] };
export type SelectInputProps = SelectInputOnlyOptions & HTMLSelectAttributes;
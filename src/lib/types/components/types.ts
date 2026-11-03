import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLInputAttributes, HTMLSelectAttributes } from "svelte/elements";

export type ThemeOptions = "light" | "dark" | "gruvbox";

type ButtonOnlyProps = { accent?: string };
export type ButtonProps = ButtonOnlyProps & HTMLButtonAttributes;

export type LinkButtonProps = ButtonOnlyProps & HTMLAnchorAttributes;

type InputOnlyProps = { label: string, errors?: string[], hideLabel?: boolean }

type TextInputOnlyProps = { type: "text" | "password" | "email" } & InputOnlyProps;
export type TextInputProps = TextInputOnlyProps & HTMLInputAttributes;

type SelectInputOnlyOptions = { options: string[], containerClass?: string } & InputOnlyProps;
export type SelectInputProps = SelectInputOnlyOptions & HTMLSelectAttributes;

type FileInputOnlyProps = { accept: string } & InputOnlyProps;
export type FileInputProps = FileInputOnlyProps & HTMLInputAttributes;

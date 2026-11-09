import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
    HTMLInputAttributes,
    HTMLSelectAttributes,
    HTMLTextareaAttributes
} from "svelte/elements";

export type Accents = "default" | "error";
export type ThemeOptions = "light" | "dark" | "gruvbox";

type ButtonOnlyProps = { accent?: Accents };
export type ButtonProps = ButtonOnlyProps & HTMLButtonAttributes;

export type LinkButtonProps = ButtonOnlyProps & HTMLAnchorAttributes;

type InputOnlyProps = { label: string, errors?: string[], hideLabel?: boolean }

type TextInputOnlyProps = { type: "text" | "password" | "email", isTextArea?: boolean } & InputOnlyProps;
export type TextInputProps = TextInputOnlyProps & HTMLInputAttributes;

type SelectInputOnlyOptions = { options: string[], containerClass?: string } & InputOnlyProps;
export type SelectInputProps = SelectInputOnlyOptions & HTMLSelectAttributes;

type FileInputOnlyProps = { accept: string } & InputOnlyProps;
export type FileInputProps = FileInputOnlyProps & HTMLInputAttributes;

type TextAreaInputOnlyProps = InputOnlyProps;
export type TextAreaInputProps = TextAreaInputOnlyProps & HTMLTextareaAttributes;

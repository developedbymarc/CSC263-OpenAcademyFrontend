import { type InferType, object, string } from 'yup';

export const SignUpSchema = object({
    username: string().default("").required(),
    email: string().default("").email().required(),
    password: string().default("").min(8).required(),
});
export type SignUpData = InferType<typeof SignUpSchema>;

export const LoginSchema = object({
    email: string().email().required(),
    password: string().min(8).required(),
});
export type LoginData = InferType<typeof LoginSchema>;
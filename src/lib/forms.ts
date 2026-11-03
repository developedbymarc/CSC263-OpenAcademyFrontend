import { type InferType, object, string, mixed } from 'yup';
import { EUserRole } from './types/entities/user';

export type SignUpData = InferType<typeof SignUpSchema>;
export const SignUpSchema = object({
    firstName: string().min(1).required(),
    lastName: string().min(1).required(),
    email: string().email().required(),
    password: string().min(8).required(),
    role: mixed<EUserRole>()
        .oneOf([
            EUserRole.Student,
            EUserRole.Teacher,
            EUserRole.Moderator,
            EUserRole.Admin
        ])
        .required("Role is required")
});

export type LoginData = InferType<typeof LoginSchema>;
export const LoginSchema = object({
    email: string().email().required(),
    password: string().min(8).required(),
});

import { type InferType, object, string, mixed, ObjectSchema, number, array, bool, ref } from 'yup';
import { EUserRole } from './types/entities/user';
import type { ICourse, ILesson, IModule } from './types/entities/course';

// Common
const passwInput = string().min(8);

// Auth Schemas

export type ISignUpData = InferType<typeof SignUpSchema>;
export const SignUpSchema = object({
    username: string().matches(/^[A-Za-z0-9._-]+$/, "Use only letters, numbers, ., _, or -").required(),
    firstName: string().min(1).required(),
    lastName: string().min(1).required(),
    email: string().email().required(),
    password: passwInput.required(),
    confirmedPassword: string().default("").oneOf([ref("password")], "Passwords must match").required(),
    role: mixed<EUserRole>().oneOf(Object.values(EUserRole)).required("Role is required")
});

// Used by admins / root to create moderators and admins (role is fixed by the endpoint)
export type IStaffData = InferType<typeof StaffSchema>;
export const StaffSchema = SignUpSchema.omit(["role"]);

export type ILoginData = InferType<typeof LoginSchema>;
export const LoginSchema = object({
    email: string().email().required(),
    password: passwInput.required(),
    remember: bool().default(false)
});

export type IEmailData = InferType<typeof EmailSchema>;
export const EmailSchema = object({
    email: string().email().required(),
});

export type IResetPasswordData = InferType<typeof ResetPasswordSchema>;
export const ResetPasswordSchema = object({
    password: passwInput.required(),
    repeatPassword: string().default("").oneOf([ref("password")], "Passwords must match").required(),
});

export type IProfileData = InferType<typeof ProfileSchema>;
export const ProfileSchema = object({
    firstName: string().min(1).required(),
    lastName: string().min(1).required(),
    headline: string().default(""),
    bio: string().default(""),
    expertise: string().default(""),
});

// Course Schemas

type IPureLesson = Omit<ILesson, "id" | "lessonAssets" | "moduleId" | "createdAt" | "updatedAt">
export type ILessonData = InferType<typeof LessonSchema>
export const LessonSchema: ObjectSchema<IPureLesson> = object().shape({
    title: string().min(1).max(64).required(),
    description: string().min(1).max(64).required(),
    order: number().integer().min(0).required(),
    content: string().min(1).required()
});

type IPureModule = Omit<IModule, "id" | "createdAt" | "updatedAt" | "courseId" | "lessons"> & { lessons: IPureLesson[] }
export type IModuleData = InferType<typeof ModuleSchema>
export const ModuleSchema: ObjectSchema<IPureModule> = object().shape({
    title: string().min(1).max(64).required(),
    description: string().min(1).max(64).required(),
    order: number().integer().min(0).required(),
    lessons: array().of(LessonSchema).default([])
});

type IPureCourse = Omit<
    ICourse,
    "id" | "createdAt" | "updatedAt" | "modules" | "categories" | "status" | "instructorId"> & { modules: IPureModule[] }
export type ICourseData = InferType<typeof CourseSchema>
export const CourseSchema: ObjectSchema<IPureCourse> = object().shape({
    title: string().min(1).max(64).required(),
    description: string().min(1).max(64).required(),
    modules: array().of(ModuleSchema).default([])
});

// Explore / search (validated from the URL query string)

export const PAGE_SIZES = [6, 12, 24, 48] as const;
export const SORT_OPTIONS = ["relevance", "title-asc", "title-desc"] as const;
export type ISearchData = InferType<typeof SearchSchema>;
export const SearchSchema = object({
    title: string().trim().max(128).default(""),
    category: string().trim().max(64).default(""),
    page: number().integer().min(1).default(1),
    pageSize: number().integer().oneOf([...PAGE_SIZES]).default(12),
    sort: string().oneOf([...SORT_OPTIONS]).default("relevance"),
});

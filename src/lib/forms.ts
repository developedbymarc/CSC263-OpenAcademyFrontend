import { type InferType, object, string, mixed, ObjectSchema, number, array, bool } from 'yup';
import { EUserRole } from './types/entities/user';
import type { ICourse, ILesson, IModule } from './types/entities/course';

// Auth Schemas

export type ISignUpData = InferType<typeof SignUpSchema>;
export const SignUpSchema = object({
    firstName: string().min(1).required(),
    lastName: string().min(1).required(),
    email: string().email().required(),
    password: string().min(8).required(),
    role: mixed<EUserRole>().oneOf(Object.values(EUserRole)).required("Role is required"),
    remember: bool().default(false)
});

export type ILoginData = InferType<typeof LoginSchema>;
export const LoginSchema = object({
    email: string().email().required(),
    password: string().min(8).required(),
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
    order: number().integer().min(0).required(),
    modules: array().of(ModuleSchema).default([])
});

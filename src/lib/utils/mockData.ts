import type { ITimeStamped } from "#lib/types/entities/common.ts";
import { ECourseStatus, type ICourse } from "#lib/types/entities/course.ts";

const genMockTimeStamp = (): ITimeStamped => ({ createdAt: new Date(), updatedAt: new Date() });

export interface IMockData {
    courses: ICourse[],
}

export const mockData: IMockData = {
    courses: [
        {
            id: "0",
            instructorId: "0",
            status: ECourseStatus.Published,
            title: "2nd Grade Math",
            description: "In this course, you will learn concepts such as addition, multiplication, division, etc. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, voluptates temporibus. In quibusdam repellat praesentium quae vitae beatae sapiente odit, vel cupiditate illo magni quos error, pariatur nulla mollitia porro!",
            modules: [
                {
                    id: "0",
                    courseId: "0",
                    order: 0,
                    title: "Module 1: Add and subtract within 20",
                    description: "In this unit, we'll learn how to add and subtract small numbers in a fun and interactive way, develop confidence with these basic math skills, and build a strong foundation for future learning.",
                    lessons: [
                        {
                            id: "0",
                            moduleId: "0",
                            content: "## Add and subtract within 20\n\nWelcome! In this lesson we practice adding and subtracting small numbers.\n\n### Quick tips\n\n- Start from the bigger number when adding\n- Use a number line to count backwards when subtracting\n- Check your answer by doing the opposite operation\n\n> `7 + 5 = 12`, so `12 - 5 = 7`",
                            lessonAssets: [],
                            title: "Add and subtract within 20: FAQ",
                            description: "Frequently asked questions about adding  and subtracting within 20.",
                            order: 0,
                            ...genMockTimeStamp(),
                        }
                    ],
                    ...genMockTimeStamp()
                },
                {
                    id: "1",
                    courseId: "0",
                    order: 1,
                    title: "Module 2: Multiply and Divide within 20",
                    description: "In this unit, we'll learn how to multiply and divide small numbers in a fun and interactive way, develop confidence with these basic math skills, and build a strong foundation for future learning.",
                    lessons: [
                        {
                            id: "1",
                            moduleId: "1",
                            content: "## Multiply and divide within 20\n\nMultiplication is repeated addition: `3 x 4` means *three groups of four*.\n\n1. Draw 3 groups\n2. Put 4 dots in each\n3. Count them all: **12**\n\nDivision is the reverse: share 12 dots equally between 3 groups and you get 4 in each.",
                            lessonAssets: [],
                            title: "Multiply and divide within 20: FAQ",
                            description: "Frequently asked questions about multiplying and dividing within 20.",
                            order: 0,
                            ...genMockTimeStamp(),
                        }
                    ],
                    ...genMockTimeStamp()
                }
            ],
            categories: [],
            ...genMockTimeStamp(),
        },
        {
            id: "2",
            instructorId: "2",
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, voluptates temporibus. In quibusdam repellat praesentium quae vitae beatae sapiente odit, vel cupiditate illo magni quos error, pariatur nulla mollitia porro!",
            modules: [],
            categories: [],
            ...genMockTimeStamp()
        },
        {
            id: "3",
            instructorId: "3",
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            modules: [],
            categories: [],
            ...genMockTimeStamp()
        },
        {
            id: "4",
            instructorId: "4",
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            modules: [],
            categories: [],
            ...genMockTimeStamp()
        },
        {
            id: "5",
            instructorId: "5",
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            modules: [],
            categories: [],
            ...genMockTimeStamp()
        }
    ]
}

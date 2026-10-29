import type { ITimeStamped } from "#lib/types/entities/common.ts";
import { ECourseStatus, type ICourse } from "#lib/types/entities/course.ts";

const genMockTimeStamp = (): ITimeStamped => ({ createdAt: new Date(), updatedAt: new Date() });

export interface IMockData {
    courses: ICourse[]
}

export const mockData: IMockData = {
    courses: [
        { 
            id: "0", 
            instructorId: "0", 
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            ...genMockTimeStamp()
        },
        { 
            id: "2", 
            instructorId: "2", 
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            ...genMockTimeStamp()
        },
        { 
            id: "3", 
            instructorId: "3", 
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            ...genMockTimeStamp()
        },
        { 
            id: "4", 
            instructorId: "4", 
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            ...genMockTimeStamp()
        },
        { 
            id: "5", 
            instructorId: "5", 
            status: ECourseStatus.Published,
            title: "Placeholder Course",
            description: "Placeholder course description",
            ...genMockTimeStamp()
        }
    ]
}
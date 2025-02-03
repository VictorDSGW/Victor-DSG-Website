import { projects } from "./projects.json";

export interface Projects {
    id: number;
    header: {
        icon?: string;
        title: string;
        description?: string;
    },
    content: string;
    footer: {
        github?: string;
        More?: string;
    }
}

export const projectsData: Projects[] = projects;

// {
//     "projects": [
//         {
//             "id": 0,
//             "header": {
//                 "icon": "",
//                 "title": "",
//                 "description": ""
//             },
//             "content": "",
//             "footer": {
//                 "github": "",
//                 "linkedin": "",
//                 "More": ""
//             }
//         }
//     ]
// }
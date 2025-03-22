import { achievements } from "./achievements.json";

export interface Achievements {
    id: number;
    course?: string;
    header: {
        icon?: string;
        title: string;
        description?: string;
    },
    content: {
        img?: string | undefined;
        imgText?: string | undefined;
        text?: string;
    },
    footer: {
        progress: number;
        link: string;
    }
}

export const achievementsData: Achievements[] = achievements;

// {
//     "achievements": [
//         {
//             "id": 0,
//             "course": "",
//             "header": {
//                 "icon": "",
//                 "title": "",
//                 "description": ""
//             },
//             "content": {
//                 "img": "",
//                 "imgText": "",
//                 "text": ""
//             },
//             "footer": {
//                 "progress": 0,
//                 "link": ""
//             }
//         }
//     ]
// }
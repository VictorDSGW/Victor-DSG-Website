import { abilities } from "./skills.json";

export interface Skill {
    id: string;
    position: { x: number, y: number };
    icon: string;
    name: string;
    card: {
        header: {
            title: string;
            description?: string;
        }
        content: {
            text: string;
        }
        footer: {
            progress?: number | null;
            link?: string;
        }
    },
    lines: {
        from: string;
        to: string;
        styles: string;
    }
}

export const skillsData: Skill[] = abilities.FullStack;


// {
//     "id": 0,
//     "position": "<name> | <row-start> / <column-start> / <row-end> / <column-end>", 
//     "icon": "/SkillsIcons/", 
//     "name": "Lorem", 
//     "tooltip": "Lorem ipsum"
// },

// {
//     id: "E1",
//     posiion: { x: 30,y: 360 }, 
//     icon: "/SkillsIcons/Front-End/icons8-html.svg", 
//     name: "HTML", 
//     card: {
//         header: {
//             title: "Lorem",
//             description: ""
//         },
//         content: {
//             text: "Lorem ipsum"
//         },
//         footer: {
//             progress: null,
//             Link: ""
//         }
//     },
//     lines: {
//         from: "",
//         to: "",
//         styles: ""
//     }
// },

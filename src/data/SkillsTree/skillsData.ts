import { abilities } from "./skills.json";

export interface Skill {
    id: number;
    position: string;
    icon: string;
    name: string;
    hoverCard: {
        title: string;
        content: string;
        footer: string;
    };
}

export const skillsData: Skill[] = abilities.FullStack;


// {
//     "id": 0,
//     "position": "<name> | <row-start> / <column-start> / <row-end> / <column-end>", 
//     "icon": "/SkillsIcons/", 
//     "name": "Lorem", 
//     "tooltip": "Lorem ipsum"
// },

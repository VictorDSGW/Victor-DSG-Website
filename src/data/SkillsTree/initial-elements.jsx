import React from 'react';
import { MarkerType } from '@xyflow/react';
import { type } from 'os';

export const nodes = [
  {
    id: 'V',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-html.svg',
      name: 'VDSG',
      card: {
        header: {
          title: "Victor DSG",
          description: "Soft Skills"
        },
        content: {
          text: "Lorem ipsum"
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: 0, y: 0 }
  },
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-html.svg',
      name: 'Web Developer',
      card: {
        header: {
          title: "Web Developer",
          description: "..."
        },
        content: {
          text: "Lorem ipsum"
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -250, y: 0 }
  },
  {
    id: 'S',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-html.svg',
      name: 'Software Engineer',
      card: {
        header: {
          title: "Engenharia de Software",
          description: "..."
        },
        content: {
          text: "Lorem ipsum"
        },
        footer: {
          progress: 1,
          Link: "https"
        }
      }
    },
    position: { x: 0, y: 250 }
  },
  // {
  //   id: 'G',
  //   type: 'avatar',
  //   selectable: true,
  //   data: {
  //     id: '0',
  //     icon: '/SkillsIcons/Front-End/icons8-html.svg',
  //     name: 'Game Dev',
  //     card: {
  //       header: {
  //         title: "Game Developer",
  //         description: "..."
  //       },
  //       content: {
  //         text: "Lorem ipsum"
  //       },
  //       footer: {
  //         progress: null,
  //         Link: "https"
  //       }
  //     }
  //   },
  //   position: { x: 250, y: 0 }
  // },
  //----------------------------------------------------------------------------------------------------//
  // {
  //   id: 'group-1',
  //   type: 'group',
  //   position: {
  //     x: -315,
  //     y: -200,
  //   },
  //   style: {
  //     width: 630,
  //     height: 630,
  //     zIndex: -50,
  //     clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
  //   },
  // },
  // {
  //   id: 'annotation-1',
  //   type: 'annotation',
  //   draggable: false,
  //   selectable: false,
  //   data: {
  //     // level: 1,
  //     label: 'Olá',
  //     // arrowStyle: {
  //     //   right: 0,
  //     //   bottom: 0,
  //     //   transform: 'translate(-30px,10px) rotate(-80deg)',
  //     // },
  //   },
  //   style: {
  //     backgroundColor: 'transparent',
  //     border: 'none',
  //   },
  //   position: { x: 50, y: 50 },
  // },
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W.1',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-html.svg',
      name: 'HTML',
      card: {
        header: {
          title: "HTML",
          description: "HyperText Markup Language"
        },
        content: {
          text: ""
          // "HTML é a sigla para HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto. É a linguagem padrão para criar páginas da web e é considerada o componente base da internet."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -500, y: 0 }
  },
  {
    id: 'W.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-css.svg',
      name: 'CSS',
      card: {
        header: {
          title: "CSS",
          description: "..."
        },
        content: {
          text: "Lorem ipsum"
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -500, y: 250 }
  },
  {
    id: 'W.3',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-javascript.svg',
      name: 'JS',
      card: {
        header: {
          title: "JavaScript",
          description: "..."
        },
        content: {
          text: "Lorem ipsum"
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -500, y: 500 }
  },
];

export const edges = [
  {
    id: 'V-W',
    source: 'V',
    target: 'W',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  {
    id: 'V-S',
    source: 'V',
    target: 'S',
    sourceHandle: 'S',
    targetHandle: 'N',
    animated: true
  },
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W-W.1',
    source: 'W',
    target: 'W.1',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  {
    id: 'W-W.3',
    source: 'W',
    target: 'W.3',
    sourceHandle: 'S',
    targetHandle: 'E'
  },
  //----------------------------------------------------------------------------------------------------//
  // {
  //   id: 'e1-2',
  //   source: '1-1',
  //   target: '1-2',
  //   label: 'edge',
  //   type: 'smoothstep',
  // },
  // {
  //   id: 'e1-3',
  //   source: '1-1',
  //   target: '1-3',
  //   animated: true,
  //   label: 'animated edge',
  // },
  // {
  //   id: 'e2-2',
  //   source: '1-2',
  //   target: '2-2',
  //   type: 'smoothstep',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //   },
  // },
  // {
  //   id: 'e2-3',
  //   source: '2-2',
  //   target: '2-3',
  //   type: 'smoothstep',
  //   markerEnd: {
  //     type: MarkerType.ArrowClosed,
  //   },
  // },
  // {
  //   id: 'e3-3',
  //   source: '2-3',
  //   sourceHandle: 'a',
  //   target: '3-2',
  //   type: 'button',
  //   animated: true,
  //   style: { stroke: 'rgb(158, 118, 255)' },
  // },
  // {
  //   id: 'e3-4',
  //   source: '2-3',
  //   sourceHandle: 'b',
  //   target: '3-1',
  //   type: 'button',
  // },
];

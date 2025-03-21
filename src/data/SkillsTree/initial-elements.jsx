import React from 'react';
import { MarkerType } from '@xyflow/react';
import { type } from 'os';

/* (Ctrl + D)
NODES
id: 'v',
id: 'W',
id: 'group-1',

|Structure|
|Design|
|Programming|

EDGES
id: 'V-W',
*/

export const nodes = (isMobile) => [
  {
    id: 'V',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-javascript.svg',
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
      icon: '/SkillsIcons/Web/icons8-web-96.png',
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
  {
    id: 'group-1',
    type: 'group',
    position: {
      x: -450,
      y: -45,
    },
    style: {
      width: 625,
      height: 625,
      zIndex: -50,
      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    },
  },
  {
    id: 'framework-group',
    type: 'group',
    position: {
      x: -1300,
      y: -45,
    },
    style: {
      width: 420,
      height: 250,
      zIndex: -50,
    },
  },
  {
    id: 'uiLibrary-group',
    type: 'group',
    position: {
      x: -1300,
      y: 210,
    },
    style: {
      width: 420,
      height: 250,
      zIndex: -50,
    },
  },
  {
    id: 'annotation-1',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      // level: 1,
      label: 'Olá',
      // arrowStyle: {
      //   right: 0,
      //   bottom: 0,
      //   transform: 'translate(-30px,10px) rotate(-80deg)',
      // },
    },
    style: {
      backgroundColor: 'transparent',
      border: 'none',
    },
    className: "mobile-only",
    position: { x: 50, y: 50 },
  },
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
  {
    id: 'framework-annotation',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      // level: 1,
      label: 'FRAMEWORKS',
      // arrowStyle: {
      //   right: 0,
      //   bottom: 0,
      //   transform: 'translate(-30px,10px) rotate(-80deg)',
      // },
    },
    style: 
    isMobile ? {
      backgroundColor: 'transparent',
      border: 'none',
      transform: 'rotate(90deg) translate(10px, 890px)',
    } : {
      backgroundColor: 'transparent',
      border: 'none',
    },
    position: { x: -1165, y: -35 },
  },
  {
    id: 'uiLibraries-annotation',
    type: 'annotation',
    draggable: false,
    selectable: false,
    data: {
      // level: 1,
      label: 'UI Libraries',
      // arrowStyle: {
      //   right: 0,
      //   bottom: 0,
      //   transform: 'translate(-30px,10px) rotate(-80deg)',
      // },
    },
    style: 
    isMobile ? {
      backgroundColor: 'transparent',
      border: 'none',
      transform: 'rotate(90deg) translate(250px, 890px)',
    } : {
      backgroundColor: 'transparent',
      border: 'none',
    },
    position: { x: -1165, y: 210 },
  },
  //----------------------------------------------------------------------------------------------------//
  //----------------------------------------|Structure|-------------------------------------------------//
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W.S.1',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/icons8-html.svg',
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
    id: 'W.S.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/frameworks/icons8-react-96.png',
      name: 'react',
      card: {
        header: {
          title: "React",
          description: "The library for web and native user interfaces"
        },
        content: {
          text: ""
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -1000, y: 0 }
  },
  {
    id: 'W.S.2.1',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/frameworks/icons8-nextjs.svg',
      name: 'nextjs',
      card: {
        header: {
          title: "NextJS",
          description: ""
        },
        content: {
          text: ""
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -1125, y: 125 }
  },
  {
    id: 'W.S.3',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/frameworks/angular-icon.svg',
      name: 'angular',
      card: {
        header: {
          title: "Angular",
          description: ""
        },
        content: {
          text: ""
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -1250, y: 0 }
  },
  //----------------------------------------------------------------------------------------------------//
  //----------------------------------------|Design|----------------------------------------------------//
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W.D.1',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/icons8-css.svg',
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
    id: 'W.D.1.1',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/icons8-sass-96.png',
      name: 'sass',
      card: {
        header: {
          title: "SASS",
          description: "Syntactically Awesome StyleSheets"
        },
        content: {
          text: "CSS com super poderes ou SCSS"
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -500, y: 375 }
  },
  {
    id: 'W.D.1.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/icons8-tailwindcss.svg',
      name: 'tcss',
      card: {
        header: {
          title: "TailwindCSS",
          description: ""
        },
        content: {
          text: "Rapidly build modern websites without ever leaving your HTML."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -625, y: 375 }
  },
  {
    id: 'W.D.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/uiLibrary/shadcnui.svg',
      name: 'shadcnui',
      card: {
        header: {
          title: "Shadcn/UI",
          description: "Build your component library"
        },
        content: {
          text: "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -1000, y: 250 }
  },
  {
    id: 'W.D.3',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/uiLibrary/radixui.svg',
      name: 'radixui',
      card: {
        header: {
          title: "Radix/UI",
          description: "Made by WorkOS"
        },
        content: {
          text: "An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go—no configuration required."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -1250, y: 250 }
  },
  //----------------------------------------------------------------------------------------------------//
  //----------------------------------------|Programming|-----------------------------------------------//
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W.P.1',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/icons8-javascript.svg',
      name: 'JS',
      card: {
        header: {
          title: "JavaScript",
          description: "..."
        },
        content: {
          text: "W.P.1"
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -500, y: 500 }
  },
  {
    id: 'W.P.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/icons8-typescript.svg',
      name: 'TS',
      card: {
        header: {
          title: "TypeScript",
          description: "..."
        },
        content: {
          text: "W.P.1.1"
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -750, y: 500 }
  },
  // {
  //   id: 'W.P.3',
  //   type: 'avatar',
  //   selectable: true,
  //   data: {
  //     id: '0',
  //     icon: '/SkillsIcons/Web/Front-End/icons8-typescript.svg',
  //     name: 'TS',
  //     card: {
  //       header: {
  //         title: "NPM",
  //         description: "..."
  //       },
  //       content: {
  //         text: ""
  //       },
  //       footer: {
  //         progress: null,
  //         Link: "https"
  //       }
  //     }
  //   },
  //   position: { x: -1500, y: 500 }
  // },
  // {
  //   id: 'W.S.1.1',
  //   type: 'avatar',
  //   selectable: true,
  //   data: {
  //     id: '0',
  //     icon: '/SkillsIcons/Web/Front-End/icons8-javascript.svg',
  //     name: 'JSX/TSX',
  //     card: {
  //       header: {
  //         title: "JavaScript",
  //         description: "..."
  //       },
  //       content: {
  //         text: "W.S.1.1"
  //       },
  //       footer: {
  //         progress: null,
  //         Link: "https"
  //       }
  //     }
  //   },
  //   position: { x: -625, y: 125 }
  // },
  //----------------------------------------------------------------------------------------------------//
  // {
  //   id: 'FakeEdge-1',
  //   type: 'group',
  //   position: {
  //     x: -1000,
  //     y: 34,
  //   },
  //   style: {
  //     width: 1000,
  //     height: 0,
  //     zIndex: -50,
  //     // borderColor: 'yellow',
  //     borderTopColor: 'white',
  //     backgroundColor: 'transparent',
  //     padding: 'none',
  //     margin: 'nond',
  //   },
  // },
  //----------------------------------------------------------------------------------------------------//
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
  //----------------------------------------|Structure|----------------------------------------//
  {
    id: 'W-W.S.1',
    source: 'W',
    target: 'W.S.1',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  {
    id: 'W.S.1-W.S.2',
    source: 'W.S.1',
    target: 'W.S.2',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  {
    id: 'W.S.2-W.S.2.1',
    source: 'W.S.2',
    target: 'W.S.2.1',
    type: 'smoothstep',
    sourceHandle: 'S',
    targetHandle: 'E'
  },
  {
    id: 'W.S.2-W.S.3',
    source: 'W.S.2',
    target: 'W.S.3',
    sourceHandle: 'W',
    targetHandle: 'E',
    animated: true
  },
  //----------------------------------------|Design|----------------------------------------//
  {
    id: 'W-W.D.1',
    source: 'W',
    target: 'W.D.1',
    sourceHandle: 'SW',
    targetHandle: 'NE'
  },
  {
    id: 'W.D.1-W.D.1.1',
    source: 'W.D.1',
    target: 'W.D.1.1',
    sourceHandle: 'S',
    targetHandle: 'N'
  },
  {
    id: 'W.D.1-W.D.1.2',
    source: 'W.D.1',
    target: 'W.D.1.2',
    type: 'smoothstep',
    sourceHandle: 'S',
    targetHandle: 'N'
  },
  {
    id: 'W.D.1-W.D.2',
    source: 'W.D.1',
    target: 'W.D.2',
    type: 'smoothstep',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  {
    id: 'W.D.2-W.D.3',
    source: 'W.D.2',
    target: 'W.D.3',
    type: 'smoothstep',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  //----------------------------------------|Programming|----------------------------------------//
  {
    id: 'W-W.P.1',
    source: 'W',
    target: 'W.P.1',
    sourceHandle: 'S',
    targetHandle: 'E'
  },
  {
    id: 'W.P.1-W.P.2',
    source: 'W.P.1',
    target: 'W.P.2',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  // {
  //   id: 'W.P.2-W.P.3',
  //   source: 'W.P.2',
  //   target: 'W.P.3',
  //   sourceHandle: 'W',
  //   targetHandle: 'E'
  // },
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

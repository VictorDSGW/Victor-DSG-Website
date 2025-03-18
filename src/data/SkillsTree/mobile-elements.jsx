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
    position: { x: 50, y: 50 },
  },
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
    style: {
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
    style: {
      backgroundColor: 'transparent',
      border: 'none',
    },
    position: { x: -1165, y: 210 },
  },
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W.S.1', // Structure
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
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W.D.1', // Design
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
  //----------------------------------------------------------------------------------------------------//
  {
    id: 'W.P.1', // Programming
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
];

export const edges = [

  //----------------------------------------------------------------------------------------------------//
  //----------------------------------------|Structure|----------------------------------------//

  //----------------------------------------|Design|----------------------------------------//

  //----------------------------------------|Programming|----------------------------------------//

  //----------------------------------------------------------------------------------------------------//
  
];

import React from 'react';
import { MarkerType } from '@xyflow/react';
import { type } from 'os';

export const nodes = [
  {
    id: '0',
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
  {
    id: '1',
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
    position: { x: -200, y: 0 }
  },
  {
    id: '2',
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
    position: { x: 0, y: -200 }
  },
  {
    id: '3',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Front-End/icons8-html.svg',
      name: 'Game Dev',
      card: {
        header: {
          title: "Game Developer",
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
    position: { x: 200, y: 0 }
  },
  // {
  //   id: 'group-1',
  //   type: 'group',
  //   position: {
  //     x: -500,
  //     y: -500,
  //   },
  //   style: {
  //     width: 390,
  //     height: 180,
  //   },
  // },
  // {
  //   id: 'annotation-1',
  //   type: 'annotation',
  //   draggable: false,
  //   selectable: false,
  //   data: {
  //     level: 1,
  //     label:
  //       '..!',
  //     arrowStyle: {
  //       right: 0,
  //       bottom: 0,
  //       transform: 'translate(-30px,10px) rotate(-80deg)',
  //     },
  //   },
  //   position: { x: 50, y: 50 },
  // },
  // {
  //   id: '2-2',
  //   data: {},
  //   type: 'avatar',
  //   position: { x: 50, y: 50 },
  //   parentId: '2-1',
  //   extent: 'parent',
  // },
  // {
  //   id: '2-3',
  //   type: 'avatar',
  //   data: {
  //     label: 'Resize Me',
  //   },
  //   position: { x: 250, y: 50 },
  //   parentId: '2-1',
  //   extent: 'parent',
  // },
  
];

export const edges = [
  {
    id: '0-1',
    source: '0',
    target: '1',
  },
  {
    id: '0-2',
    source: '0',
    target: '2',
    animated: true
  }
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

"use client"
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
      icon: '/SkillsIcons/Web/icons8-developer.png',
      name: 'VDSG',
      card: {
        header: {
          title: "Victor DSG",
          description: "Soft Skills"
        },
        content: {
          text: "No início da minha jornada profissional, destaco a minha adaptabilidade e habilidade para resolver desafios de forma criativa. Comprometido com o aprendizado autodidata, busco constantemente novas soluções para obstáculos, aprimorando minhas competências e transformando cada situação em oportunidade de crescimento. Estou em constante evolução e disposto a superar desafios com determinação."
        },
        footer: {
          progress: null,
          Link: ""
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
          description: "Sites e Aplicativos"
        },
        content: {
          text: "Na carreira de Desenvolvedor Web, o foco é criar interfaces intuitivas e dinâmicas que engajem o usuário. Utilizo linguagens de programação para dar vida a projetos inovadores. Explore minha skill tree para conhecer minhas competências."
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
      icon: '/SkillsIcons/Software/icons8-caixa-de-software-96.png',
      name: 'Software Engineer',
      card: {
        header: {
          title: "Engenharia de Software",
          description: ""
        },
        content: {
          text: "Engenheiro de Software projeta sistemas robustos e escaláveis, transformando desafios em soluções inteligentes. Com foco em qualidade e inovação, contribuo para o desenvolvimento de tecnologias que fazem a diferença. Cursando bacharelado 1º Semestre."
        },
        footer: {
          progress: 5,
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
  //     icon: '',
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
  //   className: "mobile-only",
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
      icon: '/SkillsIcons/Web/Front-End/Structure/icons8-html.svg',
      name: 'HTML',
      card: {
        header: {
          title: "HTML",
          description: "HyperText Markup Language"
        },
        content: {
          text: "HTML é a sigla para HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto. É a linguagem padrão para criar páginas da web e é considerada o componente base da internet. Define o significado e a estrutura do conteúdo da web."
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
      icon: '/SkillsIcons/Web/Front-End/Structure/frameworks/icons8-react-96.png',
      name: 'react',
      card: {
        header: {
          title: "React",
          description: "The library for web and native user interfaces"
        },
        content: {
          text: "Uma biblioteca JavaScript que facilita a criação de interfaces de usuário interativas para sites e aplicativos. Em termos simples, React ajuda a atualizar partes da página automaticamente, proporcionando uma experiência mais fluida para o usuário."
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
      icon: '/SkillsIcons/Web/Front-End/Structure/frameworks/icons8-nextjs.svg',
      name: 'nextjs',
      card: {
        header: {
          title: "NextJS",
          description: "The React Framework for the Web"
        },
        content: {
          text: "Usado por algumas das maiores empresas do mundo, o Next.js permite a criação de aplicativos web de alta qualidade com o poder dos componentes React."
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
      icon: '/SkillsIcons/Web/Front-End/Structure/frameworks/angular-icon.svg',
      name: 'angular',
      card: {
        header: {
          title: "Angular",
          description: "Build for everyone"
        },
        content: {
          text: "Mantido por uma equipe dedicada no Google, o Angular fornece um amplo conjunto de ferramentas, APIs e bibliotecas para simplificar e agilizar o fluxo de trabalho no desenvolvimento. O Angular oferece uma plataforma sólida para você construir aplicativos rápidos e confiáveis​ ​que escalam com o tamanho da equipe e com o tamanho de sua base de código."
        },
        footer: {
          progress: 15,
          Link: "https://angular.dev/overview"
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
      icon: '/SkillsIcons/Web/Front-End/Design/icons8-css.svg',
      name: 'CSS',
      card: {
        header: {
          title: "CSS",
          description: "Cascading Style Sheets"
        },
        content: {
          text: "CSS é a sigla para Cascading Style Sheets, que significa Folha de Estilo em Cascata. É uma linguagem de programação que define a aparência de páginas da web. O CSS é usado para controlar aspectos como cores, fontes, espaçamento, layout e imagens."
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
      icon: '/SkillsIcons/Web/Front-End/Design/icons8-sass-96.png',
      name: 'sass',
      card: {
        header: {
          title: "SASS",
          description: "Syntactically Awesome StyleSheets"
        },
        content: {
          text: "CSS com super poderes ou SCSS é uma extensão do CSS que torna a criação de estilos para páginas web mais simples e organizada. O SASS permite o uso de variáveis e funções para escrever códigos de forma mais rápida e manter um design consistente."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -500, y: 125 }
  },
  {
    id: 'W.D.1.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/Design/icons8-tailwindcss.svg',
      name: 'tcss',
      card: {
        header: {
          title: "TailwindCSS",
          description: "Built for the modern web"
        },
        content: {
          text: "Sites modernos sem nunca sair do HTML. Uma estrutura CSS de utilidade em primeiro lugar, repleta de classes que podem ser compostas para criar qualquer design, diretamente na sua marcação. O Tailwind é assumidamente moderno e aproveita todos os recursos CSS mais recentes e melhores para tornar a experiência do desenvolvedor a mais agradável possível."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -625, y: 125 }
  },
  {
    id: 'W.D.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/Design/uiLibrary/shadcnui.svg',
      name: 'shadcnui',
      card: {
        header: {
          title: "Shadcn/UI",
          description: "Build your component library"
        },
        content: {
          text: "Um conjunto de componentes acessíveis e lindamente projetados e uma plataforma de distribuição de código. Funciona com seus frameworks favoritos. Open Source. Código Aberto."
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
      icon: '/SkillsIcons/Web/Front-End/Design/uiLibrary/radixui.svg',
      name: 'radixui',
      card: {
        header: {
          title: "Radix/UI",
          description: "Start building your app now"
        },
        content: {
          text: "Uma biblioteca de componentes de código aberto otimizada para desenvolvimento rápido, fácil manutenção e acessibilidade. Basta importar e pronto — sem necessidade de configuração."
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
      icon: '/SkillsIcons/Web/Front-End/Programming/icons8-javascript.svg',
      name: 'JS',
      card: {
        header: {
          title: "JavaScript",
          description: "JS"
        },
        content: {
          text: "JavaScript é uma linguagem de programação que permite adicionar interatividade a páginas da web. É uma das linguagens mais populares do mundo e é usada para criar sites, aplicativos, jogos e muito mais."
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
    id: 'W.P.1.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/Programming/icons8-typescript.svg',
      name: 'TS',
      card: {
        header: {
          title: "TypeScript",
          description: "TS"
        },
        content: {
          text: "TypeScript é JavaScript com sintaxe para tipos. TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, dando as melhores ferramentas em qualquer escala."
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
    id: 'W.P.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/Programming/icons8-nodejs.svg',
      name: 'NodeJS',
      card: {
        header: {
          title: "Node.js",
          description: "Executar a JavaScript em Toda Parte"
        },
        content: {
          text: "Node.js é uma ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -750, y: 500 }
  },
  {
    id: 'W.P.2.1',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/Programming/icons8-npm.svg',
      name: 'NPM',
      card: {
        header: {
          title: "NPM",
          description: "Build amazing things"
        },
        content: {
          text: "NPM significa Node Package Manager (Gerenciador de Pacotes Node). É uma biblioteca e registro para pacotes de software JavaScript. npm também tem ferramentas de linha de comando para ajudar a instalação de diferentes pacotes e gerenciar suas dependências."
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
    id: 'W.P.2.2',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/Programming/icons8-webpack.svg',
      name: 'webpack',
      card: {
        header: {
          title: "WebPack",
          description: "Bundle your assets"
        },
        content: {
          text: "Em sua essência, o webpack é um empacotador de módulos estáticos para aplicativos JavaScript modernos. Quando o webpack processa seu aplicativo, ele cria internamente um gráfico de dependências de um ou mais pontos de entrada e, em seguida, combina todos os módulos que seu projeto precisa em um ou mais pacotes, que são ativos estáticos para servir seu conteúdo."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -875, y: 375 }
  },
  {
    id: 'W.P.3',
    type: 'avatar',
    selectable: true,
    data: {
      id: '0',
      icon: '/SkillsIcons/Web/Front-End/Programming/icons8-git.svg',
      name: 'git',
      card: {
        header: {
          title: "Git",
          description: "--fast-version-control"
        },
        content: {
          text: "Git é um sistema de controle de versão distribuído, gratuito e de código aberto, projetado para lidar com tudo, desde projetos pequenos até muito grandes, com rapidez e eficiência."
        },
        footer: {
          progress: null,
          Link: "https"
        }
      }
    },
    position: { x: -1000, y: 500 }
  },
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
    sourceHandle: 'N',
    targetHandle: 'S'
  },
  {
    id: 'W.D.1-W.D.1.2',
    source: 'W.D.1',
    target: 'W.D.1.2',
    type: 'smoothstep',
    sourceHandle: 'S',
    targetHandle: 'E'
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
    id: 'W.P.1-W.P.1.2',
    source: 'W.P.1',
    target: 'W.P.1.2',
    sourceHandle: 'N',
    targetHandle: 'S'
  },
  {
    id: 'W.P.1-W.P.2',
    source: 'W.P.1',
    target: 'W.P.2',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  {
    id: 'W.P.2-W.P.2.1',
    source: 'W.P.2',
    target: 'W.P.2.1',
    sourceHandle: 'NE',
    targetHandle: 'SW'
  },
  {
    id: 'W.P.2-W.P.2.2',
    source: 'W.P.2',
    target: 'W.P.2.2',
    sourceHandle: 'NW',
    targetHandle: 'SE'
  },
  {
    id: 'W.P.2-W.P.3',
    source: 'W.P.2',
    target: 'W.P.3',
    sourceHandle: 'W',
    targetHandle: 'E'
  },
  //----------------------------------------------------------------------------------------------------//
];

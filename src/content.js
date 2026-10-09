// ─────────────────────────────────────────────────────────────
//  Todo el contenido del sitio vive acá. Editá textos, links y
//  proyectos sin tocar los componentes.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Marcelo Del Valle',
  email: 'cheloxnz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/chelodelvalle/',
  github: 'https://github.com/cheloxnz',
  // Subí tu CV a /public/cv.pdf y quedará disponible en el botón.
  cv: '/cv.pdf',
}

export const stack = {
  frontend: ['Vue 3', 'Nuxt', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Pinia', 'Redux', 'Vuetify', 'Tailwind', 'SASS', 'HTML5 / CSS3'],
  backend: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'MySQL', 'Sequelize', 'Supabase'],
  tools: ['Git', 'GitHub', 'GitLab', 'Azure', 'Vite', 'Jira', 'Trello', 'Figma'],
  ai: ['Claude', 'ChatGPT', 'Gemini', 'Google Flow', 'Prompt Engineering', 'AI-assisted dev'],
}

const projectsBase = [
  { id: 'novamarket', repo: 'https://github.com/cheloxnz/nova-market', demo: 'https://cheloxnz.github.io/nova-market/', image: '/projects/nova-market.jpg', tech: ['Vue 3', 'Vue Router', 'Pinia', 'Vite'], hue: 228 },
  { id: 'novabank', repo: 'https://github.com/cheloxnz/nova-bank', demo: 'https://cheloxnz.github.io/nova-bank/', image: '/projects/nova-bank.jpg', imagePos: 'center', tech: ['Vue 3', 'Pinia', 'PWA', 'Vite'], hue: 250 },
  { id: 'medical', repo: 'https://github.com/cheloxnz/app-medical', tech: ['Vue', 'Vuetify'], hue: 150 },
  { id: 'tsfull', repo: 'https://github.com/cheloxnz/typescript-node-react', tech: ['TypeScript', 'Node', 'Express', 'MongoDB', 'React'], hue: 260 },
  { id: 'restapi', repo: 'https://github.com/cheloxnz/node-js-mysql-rest-api', tech: ['Node', 'Express', 'MySQL'], hue: 20 },
  { id: 'poke', repo: 'https://github.com/cheloxnz/poke_api_app', tech: ['Vue', 'REST API'], hue: 330 },
]

const experienceBase = [
  { id: 'leapsight', company: 'Leapsight', from: '2023', to: null, tags: ['Vue', 'React', 'TypeScript', 'SASS'] },
  { id: 'freelance', company: 'Freelance', from: '2022', to: '2023', tags: ['Vue', 'Node', 'PostgreSQL'] },
  { id: 'jemersoft', company: 'Jemersoft', from: '2022', to: '2022', tags: ['Vue.js', 'SASS', 'JavaScript'] },
  { id: 'lubee', company: 'Lubee', from: '2020', to: '2022', tags: ['Vue.js', 'SASS', 'Node'] },
]

const es = {
  nav: { about: 'Sobre mí', experience: 'Experiencia', stack: 'Stack', ai: 'IA', projects: 'Proyectos', contact: 'Contacto' },
  hero: {
    status: 'Disponible para nuevos desafíos',
    role: 'Full Stack Developer',
    lead: 'Construyo productos web rápidos, cuidados y escalables con',
    leadTech: 'Vue, React, Angular y Node',
    leadEnd: '. Más de 6 años en fintech, SaaS y B2B.',
    ctaPrimary: 'Hablemos',
    ctaSecondary: 'Ver experiencia',
    location: 'Buenos Aires, AR',
    scroll: 'Scroll',
  },
  stats: [
    { value: '6+', label: 'años construyendo software' },
    { value: '4', label: 'empresas y equipos de producto' },
    { value: '30+', label: 'repositorios en GitHub' },
    { value: 'AI', label: 'IA integrada a mi flujo de trabajo' },
  ],
  about: {
    kicker: '01 — Sobre mí',
    title: ['Código limpio,', 'interfaces que se', 'sienten bien.'],
    p1: 'Soy Marcelo, desarrollador Full Stack de Buenos Aires con foco en frontend. Me especializo en el ecosistema JavaScript —principalmente Vue— y en llevar ideas a productos reales: desde la arquitectura de componentes hasta la API que los alimenta.',
    p2: 'Antes de escribir código pasé casi una década en infraestructura de telecomunicaciones. De ahí me quedó algo que aplico todos los días: entender el sistema completo, resolver con criterio y entregar cosas que funcionan.',
    p3: 'Hoy trabajo con la IA como parte natural de mi proceso: la uso para investigar, prototipar, revisar y acelerar el desarrollo sin perder calidad.',
    values: [
      { t: 'Detalle', d: 'Pixel-perfect, accesible y responsive.' },
      { t: 'Performance', d: 'Interfaces rápidas y livianas.' },
      { t: 'Producto', d: 'Pienso en el usuario, no solo en el ticket.' },
    ],
  },
  experience: {
    kicker: '02 — Experiencia',
    title: 'Dónde construí',
    present: 'Actualidad',
    items: {
      leapsight: { role: 'Frontend Developer', place: 'Jornada completa', desc: 'Desarrollo frontend de productos web en un equipo de producto: interfaces escalables, componentes reutilizables y foco en la experiencia de usuario y la calidad del código.' },
      freelance: { role: 'Full Stack Developer', place: 'Remoto', desc: 'Desarrollo end-to-end de aplicaciones a medida para clientes: relevamiento, diseño de la solución, frontend, backend y puesta en producción.' },
      jemersoft: { role: 'Software Engineer', place: 'Córdoba, AR', desc: 'Desarrollo de aplicaciones web con Vue.js y SASS dentro de equipos ágiles, trabajando sobre funcionalidades nuevas y mantenimiento evolutivo.' },
      lubee: { role: 'Full Stack Developer', place: 'Buenos Aires, AR', desc: 'Primer rol como desarrollador: construcción de features full stack con Vue.js en el cliente y Node en el servidor. Un año y medio de crecimiento profesional intenso.' },
    },
  },
  stackSec: {
    kicker: '03 — Stack',
    title: 'Herramientas con las que trabajo',
    groups: { frontend: 'Frontend', backend: 'Backend & Datos', tools: 'Tooling & Cloud' },
    frontendNote: 'Mi terreno principal. Vue es mi casa, pero me muevo cómodo en React y Angular.',
  },
  aiSec: {
    kicker: '04 — Inteligencia Artificial',
    title: ['La IA no reemplaza', 'al developer.', 'Lo potencia.'],
    body: 'Domino las principales herramientas de IA generativa y las integro a mi flujo de trabajo diario: diseño de prompts, generación y revisión de código, documentación, research técnico y creación de contenido visual.',
    points: [
      'Prompt engineering estructurado para resultados consistentes',
      'Desarrollo asistido por IA: más velocidad, misma calidad',
      'Generación de imagen y video con Google Flow y Gemini',
      'Criterio para saber cuándo confiar y cuándo verificar',
    ],
    terminal: {
      prompt: 'Refactorizá este componente Vue a Composition API, tipalo con TypeScript y agregá tests.',
      lines: ['Analizando componente…', 'Extrayendo composables → useFilters(), usePagination()', 'Generando tipos e interfaces', '12 tests creados · todos en verde'],
    },
  },
  projectsSec: {
    kicker: '05 — Proyectos',
    title: 'Trabajo seleccionado',
    viewRepo: 'Ver código',
    viewDemo: 'Ver demo',
    more: 'Más proyectos en GitHub',
    items: {
      novabank: { title: 'Nova Bank', type: 'Fintech · Mobile · PWA', desc: 'App fintech mobile instalable: saldo y movimientos, transferencias en 3 pasos, tarjeta virtual con congelamiento y límites, y estadísticas de gastos.' },
      novamarket: { title: 'Nova Market', type: 'E-commerce · Template', desc: 'Template de marketplace con búsqueda con autocompletado, filtros, ficha de producto, carrito, favoritos y checkout en 3 pasos.' },
      medical: { title: 'App Medical', type: 'Health · SPA', desc: 'Aplicación de gestión médica construida con Vue y Vuetify, con foco en una UI clara y usable.' },
      tsfull: { title: 'TS Full Stack', type: 'Full Stack', desc: 'Aplicación full stack tipada de punta a punta: Node, Express, Passport y MongoDB Atlas con frontend en React.' },
      restapi: { title: 'Node MySQL API', type: 'Backend', desc: 'API REST con Node, Express y MySQL: rutas CRUD, manejo de errores y estructura modular.' },
      poke: { title: 'Pokédex', type: 'Vue · API', desc: 'SPA en Vue que consume la PokéAPI con búsqueda, listado y detalle de cada pokémon.' },
    },
  },
  contact: {
    kicker: '06 — Contacto',
    title: ['¿Tenés un proyecto', 'o un equipo', 'donde sumo?'],
    body: 'Estoy abierto a posiciones Frontend / Full Stack, remotas o híbridas, y a proyectos freelance. Respondo rápido.',
    copy: 'Copiar email',
    copied: '¡Copiado!',
    cv: 'Descargar CV',
  },
  footer: { built: 'Diseñado y desarrollado con Vue 3 + Vite', rights: 'Todos los derechos reservados.' },
}

const en = {
  nav: { about: 'About', experience: 'Experience', stack: 'Stack', ai: 'AI', projects: 'Projects', contact: 'Contact' },
  hero: {
    status: 'Open to new opportunities',
    role: 'Full Stack Developer',
    lead: 'I build fast, polished and scalable web products with',
    leadTech: 'Vue, React, Angular and Node',
    leadEnd: '. 6+ years across fintech, SaaS and B2B.',
    ctaPrimary: "Let's talk",
    ctaSecondary: 'See experience',
    location: 'Buenos Aires, AR',
    scroll: 'Scroll',
  },
  stats: [
    { value: '6+', label: 'years building software' },
    { value: '4', label: 'companies & product teams' },
    { value: '30+', label: 'repositories on GitHub' },
    { value: 'AI', label: 'AI built into my daily workflow' },
  ],
  about: {
    kicker: '01 — About',
    title: ['Clean code,', 'interfaces that', 'feel right.'],
    p1: "I'm Marcelo, a frontend-focused Full Stack developer from Buenos Aires. I specialize in the JavaScript ecosystem —mainly Vue— and in turning ideas into real products: from component architecture to the API behind it.",
    p2: 'Before writing code I spent almost a decade in telecom infrastructure. It taught me something I apply every day: understand the whole system, solve with judgment, and ship things that work.',
    p3: 'Today AI is a natural part of my process: I use it to research, prototype, review and speed up development without sacrificing quality.',
    values: [
      { t: 'Detail', d: 'Pixel-perfect, accessible and responsive.' },
      { t: 'Performance', d: 'Fast, lightweight interfaces.' },
      { t: 'Product', d: 'I think about users, not just tickets.' },
    ],
  },
  experience: {
    kicker: '02 — Experience',
    title: "Where I've built",
    present: 'Present',
    items: {
      leapsight: { role: 'Frontend Developer', place: 'Full-time', desc: 'Frontend development of web products within a product team: scalable interfaces, reusable components and a strong focus on UX and code quality.' },
      freelance: { role: 'Full Stack Developer', place: 'Remote', desc: 'End-to-end development of custom applications for clients: discovery, solution design, frontend, backend and production deployment.' },
      jemersoft: { role: 'Software Engineer', place: 'Córdoba, AR', desc: 'Web application development with Vue.js and SASS in agile teams, shipping new features and evolving existing products.' },
      lubee: { role: 'Full Stack Developer', place: 'Buenos Aires, AR', desc: 'First developer role: building full stack features with Vue.js on the client and Node on the server. A year and a half of intense professional growth.' },
    },
  },
  stackSec: {
    kicker: '03 — Stack',
    title: 'Tools I work with',
    groups: { frontend: 'Frontend', backend: 'Backend & Data', tools: 'Tooling & Cloud' },
    frontendNote: "My home turf. Vue is where I live, but I'm comfortable in React and Angular too.",
  },
  aiSec: {
    kicker: '04 — Artificial Intelligence',
    title: ["AI doesn't replace", 'the developer.', 'It amplifies them.'],
    body: 'I work fluently with the leading generative AI tools and use them every day: prompt design, code generation and review, documentation, technical research and visual content creation.',
    points: [
      'Structured prompt engineering for consistent results',
      'AI-assisted development: more speed, same quality',
      'Image & video generation with Google Flow and Gemini',
      'Judgment to know when to trust and when to verify',
    ],
    terminal: {
      prompt: 'Refactor this Vue component to the Composition API, type it with TypeScript and add tests.',
      lines: ['Analyzing component…', 'Extracting composables → useFilters(), usePagination()', 'Generating types & interfaces', '12 tests created · all green'],
    },
  },
  projectsSec: {
    kicker: '05 — Projects',
    title: 'Selected work',
    viewRepo: 'View code',
    viewDemo: 'Live demo',
    more: 'More projects on GitHub',
    items: {
      novabank: { title: 'Nova Bank', type: 'Fintech · Mobile · PWA', desc: 'Installable mobile fintech app: balance and activity, 3-step transfers, virtual card with freeze and limits, and spending insights.' },
      novamarket: { title: 'Nova Market', type: 'E-commerce · Template', desc: 'Marketplace template with autocomplete search, filters, product page, cart, favorites and a 3-step checkout.' },
      medical: { title: 'App Medical', type: 'Health · SPA', desc: 'Medical management app built with Vue and Vuetify, focused on a clear, usable UI.' },
      tsfull: { title: 'TS Full Stack', type: 'Full Stack', desc: 'End-to-end typed full stack app: Node, Express, Passport and MongoDB Atlas with a React frontend.' },
      restapi: { title: 'Node MySQL API', type: 'Backend', desc: 'REST API with Node, Express and MySQL: CRUD routes, error handling and modular structure.' },
      poke: { title: 'Pokédex', type: 'Vue · API', desc: 'Vue SPA consuming the PokéAPI with search, listing and per-pokémon detail.' },
    },
  },
  contact: {
    kicker: '06 — Contact',
    title: ['Got a project', 'or a team where', 'I can help?'],
    body: "I'm open to Frontend / Full Stack roles, remote or hybrid, and freelance projects. I reply fast.",
    copy: 'Copy email',
    copied: 'Copied!',
    cv: 'Download CV',
  },
  footer: { built: 'Designed & built with Vue 3 + Vite', rights: 'All rights reserved.' },
}

export const content = { es, en }
export const projects = projectsBase
export const experience = experienceBase

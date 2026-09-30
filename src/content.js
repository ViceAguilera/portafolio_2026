// Contenido del portafolio. Los textos van como { es, en }; lo demás se comparte entre idiomas.
// Los campos en null se muestran como pendientes en la página.

export const ui = {
  viewCv: { es: 'Ver CV', en: 'View CV' },
  cvTitle: { es: 'Currículum Vicente Aguilera', en: 'Vicente Aguilera résumé' },
  cvDialog: { es: 'Currículum', en: 'Résumé' },
  close: { es: 'Cerrar', en: 'Close' },
  toDark: { es: 'Cambiar a modo oscuro', en: 'Switch to dark mode' },
  toLight: { es: 'Cambiar a modo claro', en: 'Switch to light mode' },
  switchLang: { es: 'Switch to English', en: 'Cambiar a español' },
  workProjects: { es: 'Proyectos en Nexus One:', en: 'Projects at Nexus One:' },
  personalProjects: { es: 'Proyectos personales:', en: 'Personal projects:' },
  experience: { es: 'Experiencia:', en: 'Experience:' },
  stack: { es: 'Stack:', en: 'Stack:' },
  contact: { es: 'En otro lugar:', en: 'Elsewhere:' },
  contactIntro: {
    es: '¿Tienes una idea que quieras desarrollar? Escríbeme por cualquiera de estos canales.',
    en: 'Got an idea you want to build? Reach me through any of these channels.',
  },
  current: { es: 'Actual', en: 'Current' },
  code: { es: 'Código', en: 'Code' },
  demo: { es: 'Demo', en: 'Demo' },
  visit: { es: 'Visitar', en: 'Visit' },
  technologies: { es: 'Tecnologías', en: 'Technologies' },
  capturePending: { es: 'Captura o GIF (16:9)', en: 'Screenshot or GIF (16:9)' },
  underConstruction: { es: 'En construcción', en: 'Under construction' },
  resultPending: { es: 'Resultado: una cifra o logro concreto', en: 'Result: a concrete metric or achievement' },
  screenshotOf: { es: 'Captura de', en: 'Screenshot of' },
  carousel: { es: 'carrusel', en: 'carousel' },
  prevImage: { es: 'Imagen anterior', en: 'Previous image' },
  nextImage: { es: 'Imagen siguiente', en: 'Next image' },
  goToImage: { es: 'Ir a la imagen', en: 'Go to image' },
  status: {
    live: { es: 'En producción', en: 'Live' },
    dev: { es: 'En desarrollo', en: 'In development' },
  },
};

export const bio = {
  es:
    'Ingeniero en computación y desarrollador full-stack. Cofundador de Nexus One, donde dirijo cinco ' +
    'productos y escribo el código de sus partes críticas: autorización multi-tenant, seguridad y CI. ' +
    'Antes, más de dos años construyendo software para la banca en Gatblac. ' +
    'Fuera del código: playlists, reseñas y videojuegos.',
  en:
    'Computer engineer and full-stack developer. Co-founder of Nexus One, where I lead five products ' +
    'and write the code for their critical parts: multi-tenant authorization, security and CI. ' +
    'Before that, 2+ years building banking software at Gatblac. ' +
    'Off the clock: playlists, reviews and video games.',
};

export const nexusOneUrl = 'https://nexusone.cl';

// Productos de Nexus One. Fuente: vault del equipo (notas de cada producto), dominios verificados.
// Solo información pública: sin clientes bajo NDA, credenciales, costos ni infraestructura.
export const workProjects = [
  {
    name: { es: 'ObraSuite', en: 'ObraSuite' },
    status: 'live',
    summary: {
      es: 'SaaS multi-tenant para gestionar obras de construcción: compras, bodega, mano de obra y rendiciones, con visión IA.',
      en: 'Multi-tenant SaaS to run construction projects: procurement, warehouse, labor and expense reports, with AI vision.',
    },
    stack: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis'],
    result: {
      es: 'Reescrito a Rails modular con paridad 1:1 frente al MVP en NestJS.',
      en: 'Rewritten into modular Rails with 1:1 parity against the NestJS MVP.',
    },
    images: ['/img/proyectos/obrasuite-landing.webp', '/img/proyectos/obrasuite-3d.webp', '/img/proyectos/obrasuite-1.webp', '/img/proyectos/obrasuite-2.webp'],
    url: 'https://obrasuite.cl',
  },
  {
    name: { es: 'Prioro', en: 'Prioro' },
    status: 'live',
    summary: {
      es: 'Gestión de tareas multi-rol para equipos de proyecto: Gantt, plan del día y matriz de Eisenhower.',
      en: 'Multi-role task management for project teams: Gantt, daily plan and Eisenhower matrix.',
    },
    stack: ['Ruby on Rails', 'React', 'TypeScript', 'PostgreSQL'],
    result: null,
    images: ['/img/proyectos/prioro-landing.webp', '/img/proyectos/prioro-1.webp', '/img/proyectos/prioro-2.webp', '/img/proyectos/prioro-3.webp'],
    url: 'https://prioro.cl',
  },
  {
    name: { es: 'MochiGo', en: 'MochiGo' },
    status: 'live',
    summary: {
      es: 'PWA familiar para organizar la vida escolar: horario, actividades y comunicación entre apoderados y profesores.',
      en: 'Family PWA to organize school life: schedule, activities and parent–teacher communication.',
    },
    stack: ['Ruby on Rails', 'React', 'PostgreSQL', 'Docker'],
    result: {
      es: 'En producción, en marcha blanca con familias reales.',
      en: 'Live and piloting with real families.',
    },
    images: ['/img/proyectos/mochigo-landing.webp', '/img/proyectos/mochigo-1.webp', '/img/proyectos/mochigo-2.webp', '/img/proyectos/mochigo-3.webp'],
    url: 'https://mochigo.nexusone.cl',
  },
  {
    name: { es: 'TiroLab', en: 'TiroLab' },
    status: 'live',
    summary: {
      es: 'Plataforma de entrenamiento de tiro con arco: sesiones, diana interactiva, analítica y coaching en tiempo real.',
      en: 'Archery training platform: sessions, interactive target, analytics and real-time coaching.',
    },
    stack: ['React', 'TypeScript', 'Node.js / Express', 'PostgreSQL'],
    result: {
      es: 'En producción desde agosto de 2026 en un club de tiro con arco.',
      en: 'Live since August 2026 at an archery club.',
    },
    images: ['/img/proyectos/tirolab-landing.webp', '/img/proyectos/tirolab-1.webp', '/img/proyectos/tirolab-2.webp', '/img/proyectos/tirolab-3.webp'],
    url: null, // la instancia en producción es la del club; confirmar antes de enlazarla
  },
  {
    name: { es: 'Prioro Food', en: 'Prioro Food' },
    status: 'dev',
    summary: {
      es: 'Plantilla SaaS para negocios de comida: pedidos, inventario, punto de venta y cocina en tiempo real.',
      en: 'SaaS template for food businesses: orders, inventory, point of sale and a real-time kitchen.',
    },
    stack: ['Node.js / Express', 'SvelteKit', 'PostgreSQL', 'Redis'],
    result: null,
    images: [],
    url: null,
  },
];

export const projects = [
  {
    name: { es: 'Sistema ANPR', en: 'ANPR System' },
    summary: {
      es: 'Reconocimiento de matrículas para control de entrada y salida vehicular.',
      en: 'License plate recognition for vehicle entry and exit control.',
    },
    stack: ['Python', 'YOLO', 'OpenCV'],
    result: null, // ej. { es: '92 % de precisión en 1.200 imágenes reales', en: '...' }
    images: [], // ej. ['/img/proyectos/anpr.webp'] (16:9); con 2+ se muestra como carrusel
    repo: 'https://github.com/ViceAguilera/detector-script-tesis',
    demo: null,
  },
  {
    name: { es: 'Entrenador de modelos YOLOv11', en: 'YOLOv11 model trainer' },
    summary: {
      es: 'Herramienta para entrenar modelos de detección de objetos con YOLOv11.',
      en: 'Tool to train object detection models with YOLOv11.',
    },
    stack: ['Python', 'Ultralytics'],
    result: null,
    images: ['/img/proyectos/yolo-trainer.webp'],
    repo: 'https://github.com/ViceAguilera/Train-YoloV11-Model',
    demo: null,
  },
  {
    name: { es: 'ReviewBot', en: 'ReviewBot' },
    summary: {
      es: 'Bot de Discord que genera reseñas de restaurantes a partir de scraping.',
      en: 'Discord bot that writes restaurant reviews from scraped data.',
    },
    stack: ['Python', 'Discord API'],
    result: null,
    images: ['/img/proyectos/reviewbot.webp'],
    repo: 'https://github.com/ViceAguilera/ReviewBot',
    demo: null,
  },
];

// Fuente: cv.yaml del CV (rendercv). Mantener sincronizado al actualizar el CV.
export const experience = [
  {
    role: { es: 'Cofundador, Product Owner y desarrollador', en: 'Co-founder, Product Owner and developer' },
    org: 'Nexus One',
    period: { es: 'Abr 2026 – hoy', en: 'Apr 2026 – present' },
    current: true,
    highlights: {
      es: [
        'Dirijo un portafolio de cinco productos con un equipo de cuatro personas, desde el levantamiento con clientes hasta producción.',
        'Endurecí la autorización de un backend Rails multi-tenant en cuatro revisiones de seguridad, cada corrección con su spec de regresión.',
        'Construí el cliente web de MochiGo (React 19 + Vite, PWA) con control de rol por ruta y contraste AA en ambos temas.',
        'Reviso e integro los PR del equipo (54 merges) con CI endurecido: suite verde, Packwerk en cero y contrato OpenAPI al día.',
      ],
      en: [
        'I lead a portfolio of five products with a four-person team, from client discovery to production.',
        'Hardened the authorization of a multi-tenant Rails backend across four security reviews, each fix backed by a regression spec.',
        'Built the MochiGo web client (React 19 + Vite, PWA) with route-level role control and AA contrast in both themes.',
        "Review and merge the team's PRs (54 merges) behind hardened CI: green suite, zero Packwerk violations and an up-to-date OpenAPI contract.",
      ],
    },
    tags: ['Ruby on Rails', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    role: { es: 'Desarrollador de software', en: 'Software developer' },
    org: 'Gatblac',
    period: { es: 'Abr 2024 – Jul 2026', en: 'Apr 2024 – Jul 2026' },
    highlights: {
      es: [
        'Desarrollé el frontend en Angular de la activación de servicios digitales del Banco BICE.',
        'Migré sus microservicios a Java 21 y cerré vulnerabilidades de sus APIs de autenticación antes del paso a producción.',
        'Mantuve Sebra y Optimus (NUAM), usados por 27 corredoras de bolsa para declarar ante el SII.',
      ],
      en: [
        "Built the Angular frontend for Banco BICE's digital services activation.",
        'Migrated its microservices to Java 21 and closed authentication API vulnerabilities before go-live.',
        'Maintained Sebra and Optimus (NUAM), used by 27 brokerage firms to file tax returns with the SII.',
      ],
    },
    tags: ['Angular', 'Java', 'Spring Boot', 'SQL Server'],
  },
  {
    role: { es: 'Ayudante universitario', en: 'Teaching assistant' },
    org: 'Universidad del Bío-Bío',
    period: { es: 'Mar 2023 – Ene 2024', en: 'Mar 2023 – Jan 2024' },
    highlights: {
      es: ['Product Owner entre la docente y los equipos del ramo, con soporte en código y SQL.'],
      en: ["Acted as Product Owner between the professor and the course's teams, supporting code and SQL."],
    },
    tags: ['SQL'],
  },
  {
    role: { es: 'Practicante Digital Experience', en: 'Digital Experience intern' },
    org: 'NTT DATA',
    period: { es: 'Ene – Mar 2023', en: 'Jan – Mar 2023' },
    highlights: {
      es: ['Desarrollé experiencias de realidad aumentada para un evento corporativo de Movistar.'],
      en: ['Built augmented reality experiences for a Movistar corporate event.'],
    },
    tags: ['AR/VR'],
  },
];

export const stack = [
  { group: { es: 'Lenguajes', en: 'Languages' }, items: ['Java', 'TypeScript', 'JavaScript', 'Ruby', 'Python', 'SQL'] },
  { group: { es: 'Frontend', en: 'Frontend' }, items: ['Angular', 'React', 'Next.js', 'SvelteKit', 'Astro', 'Tailwind CSS'] },
  { group: { es: 'Backend', en: 'Backend' }, items: ['Spring Boot', 'Ruby on Rails', 'Node.js / Express', 'FastAPI', 'OpenAPI'] },
  { group: { es: 'Datos', en: 'Data' }, items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SAP HANA', 'MongoDB', 'Redis'] },
  { group: { es: 'Testing', en: 'Testing' }, items: ['RSpec', 'Vitest', 'Playwright', 'Supertest'] },
  { group: { es: 'DevOps', en: 'DevOps' }, items: ['Docker', 'GitHub Actions', 'Nginx', 'VPS', 'Git'] },
  { group: { es: 'Visión', en: 'Computer vision' }, items: ['OpenCV', 'Ultralytics', 'Roboflow'] },
];

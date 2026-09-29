// Contenido del portafolio. Los campos en null se muestran como pendientes en la página.

export const bio =
  'Ingeniero en computación y desarrollador full-stack. Cofundador de Nexus One, donde dirijo cinco ' +
  'productos y escribo el código de sus partes críticas: autorización multi-tenant, seguridad y CI. ' +
  'Antes, más de dos años construyendo software para la banca en Gatblac. ' +
  'Fuera del código: playlists, reseñas y videojuegos.';

export const projects = [
  {
    name: 'Sistema ANPR',
    summary: 'Reconocimiento de matrículas para control de entrada y salida vehicular.',
    stack: ['Python', 'YOLO', 'OpenCV'],
    result: null, // ej. "92 % de precisión en lectura de patentes con 1.200 imágenes reales"
    image: null, // ej. '/img/proyectos/anpr.webp' (16:9)
    repo: 'https://github.com/ViceAguilera/detector-script-tesis',
    demo: null,
  },
  {
    name: 'Entrenador de modelos YOLOv11',
    summary: 'Herramienta para entrenar modelos de detección de objetos con YOLOv11.',
    stack: ['Python', 'Ultralytics'],
    result: null,
    image: null,
    repo: 'https://github.com/ViceAguilera/Train-YoloV11-Model',
    demo: null,
  },
  {
    name: 'ReviewBot',
    summary: 'Bot de Discord que genera reseñas de restaurantes a partir de scraping.',
    stack: ['Python', 'Discord API'],
    result: null,
    image: null,
    repo: 'https://github.com/ViceAguilera/ReviewBot',
    demo: null,
  },
];

// Fuente: cv.yaml del CV (rendercv). Mantener sincronizado al actualizar el CV.
export const experience = [
  {
    role: 'Cofundador, Product Owner y desarrollador',
    org: 'Nexus One',
    period: 'Abr 2026 – hoy',
    current: true,
    note: 'ObraSuite, Prioro, MochiGo, Prioro Food y TiroLab',
    highlights: [
      'Dirijo un portafolio de cinco productos con un equipo de cuatro personas, desde el levantamiento con clientes hasta producción.',
      'Endurecí la autorización de un backend Rails multi-tenant en cuatro revisiones de seguridad, cada corrección con su spec de regresión.',
      'Construí el cliente web de MochiGo (React 19 + Vite, PWA) con control de rol por ruta y contraste AA en ambos temas.',
      'Reviso e integro los PR del equipo (54 merges) con CI endurecido: suite verde, Packwerk en cero y contrato OpenAPI al día.',
    ],
    tags: ['Ruby on Rails', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Desarrollador de software',
    org: 'Gatblac',
    period: 'Abr 2024 – Jul 2026',
    note: 'Banca: BICE, BCI y NUAM',
    highlights: [
      'Desarrollé el frontend en Angular de la activación de servicios digitales del Banco BICE.',
      'Migré sus microservicios a Java 21 y cerré vulnerabilidades de sus APIs de autenticación antes del paso a producción.',
      'Mantuve Sebra y Optimus (NUAM), usados por 27 corredoras de bolsa para declarar ante el SII.',
    ],
    tags: ['Angular', 'Java', 'Spring Boot', 'SQL Server'],
  },
  {
    role: 'Ayudante universitario',
    org: 'Universidad del Bío-Bío',
    period: 'Mar 2023 – Ene 2024',
    note: null,
    highlights: ['Product Owner entre la docente y los equipos del ramo, con soporte en código y SQL.'],
    tags: ['SQL'],
  },
  {
    role: 'Practicante Digital Experience',
    org: 'NTT DATA',
    period: 'Ene – Mar 2023',
    note: 'Realidad aumentada para Movistar',
    highlights: ['Desarrollé experiencias de realidad aumentada para un evento corporativo de Movistar.'],
    tags: ['AR/VR'],
  },
];

export const stack = [
  { group: 'Lenguajes', items: ['Java', 'TypeScript', 'JavaScript', 'Ruby', 'Python', 'SQL'] },
  { group: 'Frontend', items: ['Angular', 'React', 'Next.js', 'SvelteKit', 'Astro', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Spring Boot', 'Ruby on Rails', 'Node.js / Express', 'FastAPI', 'OpenAPI'] },
  { group: 'Datos', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'SAP HANA', 'MongoDB', 'Redis'] },
  { group: 'Testing', items: ['RSpec', 'Vitest', 'Playwright', 'Supertest'] },
  { group: 'DevOps', items: ['Docker', 'GitHub Actions', 'Nginx', 'VPS', 'Git'] },
  { group: 'Visión', items: ['OpenCV', 'Ultralytics', 'Roboflow'] },
];

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
    note: 'ObraSuite, Prioro, MochiGo, Prioro Food y TiroLab',
  },
  {
    role: 'Desarrollador de software',
    org: 'Gatblac',
    period: 'Abr 2024 – Jul 2026',
    note: 'Banca: BICE, BCI y sistemas tributarios de NUAM usados por 27 corredoras',
  },
  { role: 'Ayudante universitario', org: 'Universidad del Bío-Bío', period: 'Mar 2023 – Ene 2024', note: null },
  { role: 'Practicante Digital Experience', org: 'NTT DATA', period: 'Ene – Mar 2023', note: 'Realidad aumentada para Movistar' },
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

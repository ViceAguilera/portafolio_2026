// Contenido del portafolio. Los campos en null se muestran como pendientes en la página.

export const bio =
  'Desarrollador de software en Gatblac, en proyectos para el sector financiero. ' +
  'Construyo aplicaciones web y sistemas de visión por computadora. ' +
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

export const experience = [
  { role: 'Desarrollador de software', org: 'Gatblac', period: 'Abr 2024 – hoy', note: 'Clientes del sector financiero' },
  { role: 'Ayudante universitario', org: 'Universidad del Bío-Bío', period: 'Mar 2023 – Ene 2024', note: null },
  { role: 'Practicante Digital Experience', org: 'NTT DATA', period: 'Ene – Mar 2023', note: null },
];

export const stack = [
  { group: 'Lenguajes', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'Frameworks', items: ['React', 'Angular', 'Next.js', 'NestJS', 'Spring Boot', 'FastAPI'] },
  { group: 'Datos', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'] },
  { group: 'Visión', items: ['OpenCV', 'Ultralytics', 'Roboflow'] },
  { group: 'Herramientas', items: ['Docker', 'Git', 'Maven', 'Celery'] },
];

import {
  siAngular, siAstro, siDocker, siFastapi, siGit, siGithubactions, siJavascript, siMongodb,
  siMysql, siNextdotjs, siNginx, siNodedotjs, siOpenapiinitiative, siOpencv, siOpenjdk,
  siPostgresql, siPython, siReact, siRedis, siRoboflow, siRuby, siRubyonrails, siSap,
  siSpringboot, siSvelte, siTailwindcss, siTypescript, siUltralytics, siVitest,
} from 'simple-icons';

// Nombre mostrado en content.js -> icono de simple-icons.
// Sin entrada = chip solo con texto (simple-icons no incluye p. ej. SQL Server, RSpec ni Playwright).
const ICONS = {
  Java: siOpenjdk,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  Ruby: siRuby,
  Python: siPython,
  Angular: siAngular,
  React: siReact,
  'Next.js': siNextdotjs,
  SvelteKit: siSvelte,
  Astro: siAstro,
  'Tailwind CSS': siTailwindcss,
  'Spring Boot': siSpringboot,
  'Ruby on Rails': siRubyonrails,
  'Node.js / Express': siNodedotjs,
  FastAPI: siFastapi,
  OpenAPI: siOpenapiinitiative,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  'SAP HANA': siSap,
  MongoDB: siMongodb,
  Redis: siRedis,
  Vitest: siVitest,
  Docker: siDocker,
  'GitHub Actions': siGithubactions,
  Nginx: siNginx,
  Git: siGit,
  OpenCV: siOpencv,
  Ultralytics: siUltralytics,
  Roboflow: siRoboflow,
};

// simple-icons trae varias marcas en negro o muy oscuras: se usa el color reconocible de cada una.
// `dark` es la variante para el tema oscuro cuando el color base no contrasta con el fondo.
const BRAND = {
  Java: { color: '#ED8B00' },
  Angular: { color: '#DD0031', dark: '#FF4D6D' },
  'Next.js': { color: '#000000', dark: '#FFFFFF' },
  'Ruby on Rails': { color: '#CC0000', dark: '#FF4D4D' },
  Roboflow: { color: '#6706CE', dark: '#A56BFF' },
  Ultralytics: { color: '#0B23A9', dark: '#4D8DFF' },
};

function isVeryDark(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.18;
}

export function techIcon(name) {
  const icon = ICONS[name];
  if (!icon) return null;
  const color = BRAND[name]?.color ?? `#${icon.hex}`;
  // Sin variante explícita, un logo casi negro pasa a blanco en modo oscuro para no desaparecer
  const dark = BRAND[name]?.dark ?? (isVeryDark(color) ? '#FFFFFF' : color);
  return { path: icon.path, color, dark };
}

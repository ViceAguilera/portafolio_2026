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

// Logos casi negros (Next, Angular...) desaparecerían sobre el fondo oscuro: esos usan el color del texto
function isVeryDark(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.18;
}

export function techIcon(name) {
  const icon = ICONS[name];
  if (!icon) return null;
  return { path: icon.path, color: `#${icon.hex}`, dark: isVeryDark(icon.hex) };
}

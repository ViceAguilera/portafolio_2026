# Portafolio — Vicente Aguilera

Portafolio personal single-page con fondos animados WebGL (Dither / Iridescence), modo claro/oscuro y visor de CV embebido.

###### **🚧 En construccion..🚧🔨**

## Construido con 🛠️

- HTML5
- CSS3
- JavaScript (ES Modules)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Bits](https://reactbits.dev/) (componentes Dither e Iridescence)
- [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing)
- [OGL](https://github.com/oframe/ogl)
- [Lucide React](https://lucide.dev/)

## Herramientas ⚒️

| Herramienta | Uso en el proyecto | Documentacion / sitio oficial |
| --- | --- | --- |
| Node.js | Runtime para tooling y scripts | https://nodejs.org/ |
| npm | Gestion de dependencias y scripts | https://docs.npmjs.com/ |
| Vite | Servidor dev + build de produccion | https://vite.dev/guide/ |
| React | Libreria de UI por componentes | https://react.dev/ |
| Tailwind CSS | Sistema de utilidades CSS | https://tailwindcss.com/docs |
| React Bits | Registry de componentes animados (Dither, Iridescence) | https://reactbits.dev/ |
| Three.js | WebGL para shader Dither | https://threejs.org/docs/ |
| @react-three/fiber | Renderer React para Three.js | https://r3f.docs.pmnd.rs/ |
| @react-three/postprocessing | Pipeline de post-procesado (efecto retro/dither) | https://github.com/pmndrs/react-postprocessing |
| OGL | WebGL minimal usado por el shader Iridescence | https://github.com/oframe/ogl |
| Lucide React | Iconos SVG (sol, luna, mail, etc.) | https://lucide.dev/ |
| Git | Control de versiones | https://git-scm.com/doc |

## Prerrequisitos

- [Node.js](https://nodejs.org/) (recomendado LTS actual)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Git](https://git-scm.com/downloads)

## Instalacion y ejecucion local 🔧

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPO>
   cd Portafolio
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Levanta el entorno de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre la URL que imprime Vite (por defecto `http://localhost:9666`).

## Scripts disponibles

| Script | Que hace |
| --- | --- |
| `npm run dev` | Levanta Vite en modo desarrollo con hot reload |
| `npm run build` | Genera el build de produccion en `dist/` |
| `npm run preview` | Sirve localmente el build generado para probar el bundle final |

## Caracteristicas

- **Fondos animados WebGL**: Dither (modo oscuro) e Iridescence (modo claro), ambos con interaccion al mouse.
- **Toggle de tema**: cambio entre modo claro y oscuro con transicion en colores y fondo.
- **Visor de CV embebido**: modal con `<iframe>` que muestra el PDF sin salir del sitio.
- **Tipografia personalizada**: fuente `Type Machine` cargada desde `public/font/`.
- **Hover multicolor**: animacion de gradiente arcoiris en links y boton de CV.
- **UI responsive**: breakpoints para tablet (768px) y movil (480px).

## Estructura de carpetas 📁

```text
Portafolio/
├─ public/
│  ├─ CV/
│  │  └─ Vicente_Aguilera_Arias_CV.pdf
│  └─ font/
│     ├─ Minecraft.ttf
│     └─ Type Machine.ttf
├─ src/
│  ├─ assets/
│  │  ├─ fonts/
│  │  ├─ icons/
│  │  └─ images/
│  ├─ components/
│  │  ├─ Dither/
│  │  │  ├─ Dither.jsx
│  │  │  └─ Dither.css
│  │  ├─ Iridescence/
│  │  │  ├─ Iridescence.jsx
│  │  │  └─ Iridescence.css
│  │  ├─ Header.jsx
│  │  └─ Footer.jsx
│  ├─ lib/
│  │  └─ utils.js
│  ├─ sections/
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Skills.jsx
│  │  └─ Contact.jsx
│  ├─ styles/
│  │  ├─ base/
│  │  │  ├─ reset.css
│  │  │  ├─ variables.css
│  │  │  ├─ typography.css
│  │  │  └─ global.css
│  │  ├─ utils/
│  │  │  └─ animations.css
│  │  └─ main.css
│  ├─ App.jsx
│  ├─ App.css
│  └─ main.jsx
├─ components.json
├─ index.html
├─ jsconfig.json
├─ vite.config.js
├─ package.json
└─ README.md
```

## Build y despliegue

Generar build de produccion:

```bash
npm run build
```

Salida en `dist/` (sitio estatico). Puedes desplegar en cualquier hosting estatico (Vercel, Netlify, GitHub Pages, etc.).

Para previsualizar el build localmente antes de desplegar:

```bash
npm run preview
```

## Licencia 📄

Este proyecto está bajo la licencia _MIT_ - mira el archivo [LICENSE](LICENSE) para detalles

## Autor ✒️

[**Vicente Aguilera Arias**](https://github.com/ViceAguilera)

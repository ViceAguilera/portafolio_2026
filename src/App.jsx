import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Mail, Sun, Moon, FileText, Download, X } from 'lucide-react';
import { bio, projects, experience, stack } from './content';
import { useMotion } from './motion';
import { techIcon } from './techIcons';
import './App.css';

// Los fondos WebGL (three/ogl) pesan ~1 MB: se cargan aparte para que el texto pinte primero
const Dither = lazy(() => import('@components/Dither/Dither'));
const Iridescence = lazy(() => import('@components/Iridescence/Iridescence'));

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cvUrl = '/CV/Vicente_Aguilera_Arias_CV.pdf';

function initialDark() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch { /* storage bloqueado: se usa la preferencia del sistema */ }
  return !window.matchMedia('(prefers-color-scheme: light)').matches;
}

function App() {
  const [dark, setDark] = useState(initialDark);
  const cvDialog = useRef(null);
  const root = useRef(null);
  useMotion(root, cvDialog);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch { /* sin persistencia */ }
  }, [dark]);

  function openCv() {
    // En móvil muchos navegadores no renderizan PDF dentro de un iframe: se abre directo
    if (window.matchMedia('(max-width: 768px)').matches) {
      window.open(cvUrl, '_blank', 'noopener');
      return;
    }
    cvDialog.current.showModal();
  }

  return (
    <div ref={root} className={dark ? 'theme-dark' : 'theme-light'}>
      <div className="background" aria-hidden="true">
        <Suspense fallback={null}>
          {dark ? (
            <Dither
              waveColor={[0.2823529411764706, 0.1411764705882353, 1]}
              disableAnimation={reduceMotion}
              enableMouseInteraction
              mouseRadius={0.7}
              colorNum={7}
              pixelSize={4}
              waveAmplitude={0.2}
              waveFrequency={3}
              waveSpeed={0.03}
            />
          ) : (
            <Iridescence
              speed={reduceMotion ? 0 : 1}
              amplitude={0.1}
              mouseReact={!reduceMotion}
            />
          )}
        </Suspense>
      </div>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setDark(!dark)}
        aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <main className="content">
        <h1 className="title"><span className="title__name">Vicente Aguilera</span><span className="cursor" aria-hidden="true">_</span></h1>

        <div className="cv-actions">
          <button type="button" className="cv-btn" onClick={openCv}>
            <FileText size={16} /> Ver CV
          </button>
          <a href={cvUrl} download className="cv-btn">
            <Download size={16} /> Descargar
          </a>
        </div>

        <p className="bio">{bio}</p>

        <section className="section">
          <h2 className="section-title">Proyectos:</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="project">
                {p.image ? (
                  <img src={p.image} alt={`Captura de ${p.name}`} className="project__media" loading="lazy" />
                ) : (
                  <div className="project__media project__media--pending">Captura o GIF (16:9)</div>
                )}
                <h3 className="project__name">{p.name}</h3>
                <p className="desc">{p.summary}</p>
                <p className={p.result ? 'project__result' : 'project__result pending'}>
                  {p.result ?? 'Resultado: una cifra o logro concreto'}
                </p>
                <ul className="tags" aria-label="Tecnologías">
                  {p.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="project__links">
                  <a href={p.repo} className="link">Código</a>
                  {p.demo && <a href={p.demo} className="link">Demo</a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Experiencia:</h2>
          <ul className="list">
            {experience.map((e) => (
              <li key={e.org}>
                <strong>{e.role}</strong> · {e.org}
                <span className="desc"> » {e.period}{e.note && ` · ${e.note}`}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Stack:</h2>
          <div className="stack">
            {stack.map((s) => (
              <div key={s.group} className="stack__card">
                <h3 className="stack__group">{s.group}</h3>
                <ul className="chips">
                  {s.items.map((name) => {
                    const icon = techIcon(name);
                    return (
                      <li
                        key={name}
                        className={icon?.dark ? 'chip chip--dark-brand' : 'chip'}
                        style={icon ? { '--brand': icon.color } : undefined}
                      >
                        {icon && (
                          <svg viewBox="0 0 24 24" className="chip__icon" aria-hidden="true">
                            <path d={icon.path} />
                          </svg>
                        )}
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">En otro lugar:</h2>
          <ul className="links-list">
            <li>
              <svg className="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              <a href="https://github.com/ViceAguilera" className="link">GitHub</a>
              <span className="link-meta">(@ViceAguilera)</span>
            </li>
            <li>
              <svg className="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <a href="https://www.linkedin.com/in/vicenteaguilera/" className="link">LinkedIn</a>
              <span className="link-meta">(Vicente Aguilera Arias)</span>
            </li>
            <li>
              <Mail size={18} className="link-icon" />
              <a href="mailto:iamsirius.contacto@gmail.com" className="link">Mail</a>
              <span className="link-meta">(iamsirius.contacto@gmail.com)</span>
            </li>
          </ul>
        </section>
      </main>

      {/* <dialog> nativo: Escape, focus trap y fondo inerte sin código extra */}
      <dialog
        ref={cvDialog}
        className="cv-modal"
        aria-label="Currículum"
        data-lenis-prevent
        onClick={(e) => e.target === cvDialog.current && cvDialog.current.close()}
      >
        <div className="cv-modal__inner">
          <button
            type="button"
            className="cv-modal__close"
            onClick={() => cvDialog.current.close()}
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
          <iframe
            src={cvUrl}
            title="Currículum Vicente Aguilera"
            className="cv-modal__frame"
            loading="lazy"
          />
        </div>
      </dialog>
    </div>
  );
}

export default App;

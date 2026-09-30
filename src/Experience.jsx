import { useEffect, useRef } from 'react';
import { experience, ui } from './content';
import { useT } from './i18n';
import TechChip from './TechChip';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Highlights({ items }) {
  return (
    <ul className="xp-highlights">
      {items.map((h) => <li key={h}>{h}</li>)}
    </ul>
  );
}

/* Línea de tiempo que se va llenando con el scroll */
export function ExperienceTimeline() {
  const t = useT();
  const list = useRef(null);
  const progress = useRef(null);

  useEffect(() => {
    if (reduceMotion()) {
      progress.current.style.transform = 'scaleY(1)';
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = list.current.getBoundingClientRect();
      // La línea llega al punto que cruza el 60 % de la pantalla
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height));
      progress.current.style.transform = `scaleY(${p})`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={list} className="tl">
      <span className="tl__line" aria-hidden="true">
        <span ref={progress} className="tl__progress" />
      </span>
      <ol className="tl__list">
        {experience.map((e) => (
          <li key={e.org} className="tl__item">
            <span className={e.current ? 'tl__dot tl__dot--current' : 'tl__dot'} aria-hidden="true" />
            <p className="tl__period">{t(e.period)}{e.current && <span className="tl__badge">{t(ui.current)}</span>}</p>
            <div className="tl__card">
              <h3 className="xp-role">{t(e.role)} <span className="xp-org">· {e.org}</span></h3>
              <Highlights items={t(e.highlights)} />
              <ul className="chips">{e.tags.map((tag) => <TechChip key={tag} name={tag} />)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

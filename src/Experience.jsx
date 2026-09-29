import { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import { experience } from './content';
import TechChip from './TechChip';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Highlights({ items }) {
  return (
    <ul className="xp-highlights">
      {items.map((h) => <li key={h}>{h}</li>)}
    </ul>
  );
}

/* ── Opción A: línea de tiempo que se va llenando con el scroll ── */
export function ExperienceTimeline() {
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
            <p className="tl__period">{e.period}{e.current && <span className="tl__badge">Actual</span>}</p>
            <div className="tl__card">
              <h3 className="xp-role">{e.role} <span className="xp-org">· {e.org}</span></h3>
              <Highlights items={e.highlights} />
              <ul className="chips">{e.tags.map((t) => <TechChip key={t} name={t} />)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ── Opción B: pestañas por empresa con panel de detalle ── */
export function ExperienceTabs() {
  const [active, setActive] = useState(0);
  const panel = useRef(null);
  const tabs = useRef([]);
  const e = experience[active];

  useEffect(() => {
    if (reduceMotion()) return;
    animate(panel.current.children, { opacity: [0, 1], y: [10, 0], duration: 450, delay: stagger(50), ease: 'out(4)' });
  }, [active]);

  function onKeyDown(ev) {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(ev.key in keys)) return;
    ev.preventDefault();
    const next = (active + keys[ev.key] + experience.length) % experience.length;
    setActive(next);
    tabs.current[next].focus();
  }

  return (
    <div className="xp-tabs">
      <div role="tablist" aria-label="Empresas" className="xp-tabs__list" style={{ '--i': active }} onKeyDown={onKeyDown}>
        {experience.map((x, i) => (
          <button
            key={x.org}
            ref={(el) => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`xp-tab-${i}`}
            aria-selected={active === i}
            aria-controls="xp-panel"
            tabIndex={active === i ? 0 : -1}
            className="xp-tabs__tab"
            onClick={() => setActive(i)}
          >
            {x.org}
          </button>
        ))}
        <span className="xp-tabs__indicator" aria-hidden="true" />
      </div>

      <div ref={panel} role="tabpanel" id="xp-panel" aria-labelledby={`xp-tab-${active}`} className="xp-tabs__panel">
        <h3 className="xp-role">{e.role} <span className="xp-org">@ {e.org}</span></h3>
        <p className="tl__period">{e.period}{e.current && <span className="tl__badge">Actual</span>}</p>
        <Highlights items={e.highlights} />
        <ul className="chips">{e.tags.map((t) => <TechChip key={t} name={t} />)}</ul>
      </div>
    </div>
  );
}

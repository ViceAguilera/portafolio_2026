import { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { animate, createAnimatable, createScope, createTimeline, splitText, stagger, utils } from 'animejs';

const EASE = 'out(4)';
// Valor de reposo de cada propiedad animada (scale vuelve a 1, el resto a 0)
const REST = { x: 0, y: 0, scale: 1 };

// Revela un grupo de elementos la primera vez que su contenedor entra en pantalla
function revealOnEnter(trigger, targets, from, { delay = 0, step = 70 } = {}) {
  const els = [...trigger.querySelectorAll(targets)];
  if (!els.length) return () => {};
  utils.set(els, { opacity: 0, ...from });

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    animate(els, {
      opacity: 1,
      ...Object.fromEntries(Object.keys(from).map((k) => [k, REST[k]])),
      duration: 700,
      ease: EASE,
      delay: stagger(step, { start: delay }),
    });
  }, { threshold: 0.15 });

  observer.observe(trigger);
  return () => observer.disconnect();
}

// Inclinación 3D y brillo que siguen al puntero en cada tarjeta
function tiltCard(card) {
  const tilt = createAnimatable(card, { rotateX: 500, rotateY: 500, ease: 'out(3)' });
  const MAX = 6;

  function onMove(e) {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    tilt.rotateY((px - 0.5) * MAX * 2);
    tilt.rotateX((0.5 - py) * MAX * 2);
    card.style.setProperty('--mx', `${px * 100}%`);
    card.style.setProperty('--my', `${py * 100}%`);
  }
  function onLeave() {
    tilt.rotateX(0);
    tilt.rotateY(0);
  }

  card.addEventListener('pointermove', onMove);
  card.addEventListener('pointerleave', onLeave);
  return () => {
    card.removeEventListener('pointermove', onMove);
    card.removeEventListener('pointerleave', onLeave);
  };
}

export function useMotion(rootRef, dialogRef) {
  useLayoutEffect(() => {
    let lenis = null;
    let split = null;
    const cleanups = [];

    const scope = createScope({
      root: rootRef,
      mediaQueries: { reduceMotion: '(prefers-reduced-motion: reduce)', finePointer: '(pointer: fine)' },
    }).add((ctx) => {
      if (ctx.matches.reduceMotion) return;
      const root = rootRef.current;

      lenis = new Lenis({ autoRaf: true, anchors: true });

      // Intro del hero
      split = splitText('.title__name', { chars: true });
      createTimeline({ defaults: { ease: EASE } })
        .add(split.chars, { y: ['110%', 0], opacity: [0, 1], duration: 800, delay: stagger(28) })
        .add('.cursor', { opacity: [0, 1], duration: 200 }, '-=300')
        .add('.cv-actions > *', { y: [16, 0], opacity: [0, 1], duration: 600, delay: stagger(80) }, '-=500')
        .add('.bio', { y: [12, 0], opacity: [0, 1], duration: 700 }, '-=450')
        .add('.theme-toggle', { scale: [0.6, 1], opacity: [0, 1], duration: 500 }, '<<');

      // Revelado por sección al hacer scroll
      root.querySelectorAll('.section').forEach((section) => {
        cleanups.push(revealOnEnter(section, '.section-title', { x: -24 }));
        cleanups.push(revealOnEnter(section, '.project', { y: 48, scale: 0.97 }, { delay: 120, step: 110 }));
        cleanups.push(revealOnEnter(section, '.tags li', { scale: 0.6 }, { delay: 450, step: 30 }));
        cleanups.push(revealOnEnter(section, '.list li, .links-list li', { x: -20 }, { delay: 100 }));
        cleanups.push(revealOnEnter(section, '.stack__card', { y: 32 }, { delay: 100, step: 80 }));
        cleanups.push(revealOnEnter(section, '.chip', { y: 10, scale: 0.8 }, { delay: 350, step: 18 }));
      });

      if (ctx.matches.finePointer) {
        root.querySelectorAll('.project, .stack__card').forEach((card) => cleanups.push(tiltCard(card)));
      }
    });

    // Con el modal abierto el scroll es del PDF, no de la página
    const dialog = dialogRef.current;
    const pause = () => lenis?.stop();
    const resume = () => lenis?.start();
    const observer = new MutationObserver(() => (dialog.open ? pause() : resume()));
    observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });

    return () => {
      observer.disconnect();
      cleanups.forEach((fn) => fn());
      scope.revert();
      split?.revert();
      lenis?.destroy();
    };
  }, [rootRef, dialogRef]);
}

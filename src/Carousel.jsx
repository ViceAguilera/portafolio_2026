import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ui } from './content';
import { useT } from './i18n';

// Carrusel con scroll-snap nativo: swipe táctil gratis, flechas y puntos para mouse y teclado
export default function Carousel({ images, name }) {
  const t = useT();
  const track = useRef(null);
  const tween = useRef(0); // id del rAF en curso; 0 = sin animación
  const [index, setIndexState] = useState(0);
  const current = useRef(0); // índice sin esperar al render (clics seguidos)
  const setIndex = (i) => { current.current = i; setIndexState(i); };

  // Tween propio: scrollTo({ behavior: 'smooth' }) no es fiable junto con scroll-snap y Lenis
  function goTo(i) {
    const el = track.current;
    const next = (i + images.length) % images.length;
    const to = next * el.clientWidth;
    setIndex(next); // los puntos responden al instante, sin esperar al scroll
    cancelAnimationFrame(tween.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.scrollLeft = to;
      return;
    }
    const from = el.scrollLeft;
    const start = performance.now();
    const DURATION = 420;
    el.style.scrollSnapType = 'none'; // si no, el snap devuelve el track en cada fotograma
    const step = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      el.scrollLeft = from + (to - from) * (1 - (1 - p) ** 3);
      if (p < 1) {
        tween.current = requestAnimationFrame(step);
      } else {
        tween.current = 0;
        el.style.scrollSnapType = '';
      }
    };
    tween.current = requestAnimationFrame(step);
  }

  // Solo el swipe manual actualiza el índice; durante el tween manda goTo()
  function onScroll() {
    if (tween.current) return;
    const el = track.current;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current.current + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current.current - 1); }
  }

  return (
    <div
      className="carousel project__media"
      role="region"
      aria-roledescription={t(ui.carousel)}
      aria-label={name}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div ref={track} className="carousel__track" onScroll={onScroll} data-lenis-prevent-horizontal>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${t(ui.screenshotOf)} ${name} (${i + 1}/${images.length})`}
            className="carousel__slide"
            loading="lazy"
            aria-hidden={i !== index}
          />
        ))}
      </div>

      <button type="button" className="carousel__btn carousel__btn--prev" onClick={() => goTo(current.current - 1)} aria-label={t(ui.prevImage)}>
        <ChevronLeft size={18} />
      </button>
      <button type="button" className="carousel__btn carousel__btn--next" onClick={() => goTo(current.current + 1)} aria-label={t(ui.nextImage)}>
        <ChevronRight size={18} />
      </button>

      <div className="carousel__dots">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="carousel__dot"
            aria-label={`${t(ui.goToImage)} ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

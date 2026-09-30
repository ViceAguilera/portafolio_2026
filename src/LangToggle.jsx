// Banderas en SVG: Windows no dibuja los emojis de bandera (los muestra como letras)
function FlagCL() {
  return (
    <svg viewBox="0 0 6 4" className="flag" aria-hidden="true">
      <rect width="6" height="4" fill="#d52b1e" />
      <rect width="6" height="2" fill="#fff" />
      <rect width="2" height="2" fill="#0039a6" />
      <polygon
        fill="#fff"
        points="1,0.5 1.1123,0.8455 1.4755,0.8455 1.1816,1.059 1.2939,1.4045 1,1.191 0.7061,1.4045 0.8184,1.059 0.5245,0.8455 0.8877,0.8455"
      />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 60 30" className="flag" aria-hidden="true">
      <clipPath id="flag-gb-clip">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-gb-clip)" stroke="#c8102e" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  );
}

// Un solo botón: muestra la bandera del idioma al que se cambia
export default function LangToggle({ lang, onToggle, label }) {
  return (
    <button type="button" className="lang-toggle" onClick={onToggle} aria-label={label} title={label}>
      {lang === 'es' ? <FlagGB /> : <FlagCL />}
      <span aria-hidden="true">{lang === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
}

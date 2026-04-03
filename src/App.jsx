import { useState } from 'react';
import Dither from '@components/Dither/Dither';
import Iridescence from '@components/Iridescence/Iridescence';
import { Mail, Sun, Moon } from 'lucide-react';
import './App.css';

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? 'theme-dark' : 'theme-light'}>
      <div className="background">
        {dark ? (
          <Dither
            waveColor={[0.2823529411764706, 0.1411764705882353, 1]}
            disableAnimation={false}
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
            speed={1}
            amplitude={0.1}
            mouseReact
          />
        )}
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDark(!dark)}
        aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="content">
        <h1 className="title">Vicente Aguilera<span className="cursor">_</span></h1>

        <p className="bio">
          Hola, también conocido como &quot;Sirius&quot;, soy un apasionado desarrollador de software de 24 años con experiencia en Java, Python y JavaScript.
          Me especializo en el desarrollo de aplicaciones web y sistemas de visión por computadora. Mi objetivo es crear soluciones innovadoras que mejoren la vida de las personas a través de la tecnología.
          Actualmente trabajo en Gatblac y cuando no estoy programando, estoy creando playlists, haciendo reseñas o jugando videojuegos. Si necesitas contactarme, no dudes en enviarme un mensaje. ¡Gracias por visitar mi portafolio! :D
        </p>

        <section className="section">
          <h2 className="section-title">Mis Proyectos:</h2>
          <ul className="list">
            <li>
              <a href="https://github.com/ViceAguilera/detector-script-tesis.git" className="link">Sistema ANPR</a>
              <span className="desc"> » sistema de reconocimiento de matrículas para control de entrada y salida vehicular.</span>
            </li>
            <li>
              <a href="https://github.com/ViceAguilera/Train-YoloV11-Model.git" className="link">Entrenador de Modelos YoloV11</a>
              <span className="desc"> » herramienta para entrenar modelos de detección de objetos con YoloV11.</span>
            </li>
            <li>
              <span className="desc"> En progreso muchos mas...</span>
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">En otro lugar:</h2>
          <ul className="links-list">
            <li>
              <svg className="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              <a href="#" className="link">GitHub</a>
              <span className="link-meta">(@ViceAguilera)</span>
            </li>
            <li>
              <svg className="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <a href="#" className="link">LinkedIn</a>
              <span className="link-meta">(Vicente Aguilera Arias)</span>
            </li>
            <li>
              <Mail size={18} className="link-icon" />
              <a href="#" className="link">Mail</a>
              <span className="link-meta">(iamsirius.contacto@gmail.com)</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;

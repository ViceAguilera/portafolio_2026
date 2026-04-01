function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section__title">Sobre mí</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              Escribe aquí una breve descripción sobre ti, tu experiencia
              y lo que te apasiona del desarrollo web.
            </p>
            <p>
              Menciona tu enfoque, las tecnologías con las que trabajas
              y qué tipo de proyectos disfrutas construir.
            </p>
          </div>
          <div className="about__image">
            <img src="" alt="Foto de Tu Nombre" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section__title">Proyectos</h2>
        <div className="projects__grid">
          <article className="project-card">
            <div className="project-card__image">
              <img src="" alt="Captura del proyecto" loading="lazy" />
            </div>
            <div className="project-card__body">
              <h3 className="project-card__title">Nombre del Proyecto</h3>
              <p className="project-card__description">
                Breve descripción de lo que hace el proyecto y qué problema resuelve.
              </p>
              <ul className="project-card__tags">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
              <div className="project-card__links">
                <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Código</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;

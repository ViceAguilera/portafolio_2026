function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section__title">Habilidades</h2>
        <div className="skills__grid">
          <div className="skill-group">
            <h3 className="skill-group__title">Frontend</h3>
            <ul className="skill-group__list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skill-group">
            <h3 className="skill-group__title">Herramientas</h3>
            <ul className="skill-group__list">
              <li>VS Code</li>
              <li>Figma</li>
              <li>GitHub</li>
              <li>Vite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

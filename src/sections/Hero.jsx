function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__content">
        <p className="hero__greeting">Hola, soy</p>
        <h1 className="hero__name">Tu Nombre</h1>
        <p className="hero__role">Desarrollador Web</p>
        <p className="hero__description">
          Creo experiencias web modernas, accesibles y con atención al detalle.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">Ver proyectos</a>
          <a href="#contact" className="btn btn--outline">Contacto</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

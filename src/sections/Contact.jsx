function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section__title">Contacto</h2>
        <p className="contact__text">
          ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme.
        </p>
        <form className="contact__form" action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required autoComplete="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required autoComplete="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn btn--primary">Enviar mensaje</button>
        </form>
        <div className="contact__socials">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

export function Home() {
  return (
    <section className="page home-page">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">☕ Café 100% Orgánico</div>
            <h1>Donde las raíces del pasado florecen en cada taza</h1>
            <p>
              Café Zapote no es una marca más de café. Somos una familia que cultiva, procesa y comparte café orgánico desde
              las montañas de Mesillas, Nayarit, bajo la sombra de un zapote centenario.
            </p>
            <div className="hero-actions">
              <a href="#highlight-coffees" className="btn primary">
                Conoce nuestro café
              </a>
              <a href="/quote" className="btn ghost">
                Solicita una cotización
              </a>
            </div>
          </div>
          <div className="hero-image-feature">
            <img src="/topImage.jpg" alt="Taza de Café Zapote" className="hero-cup" />
          </div>
        </div>

        <div className="hero-gallery">
          <div className="gallery-item">
            <img src="/WhatsApp Image 2025-11-15 at 7.01.03 PM (1).jpeg" alt="Cafetales de Café Zapote" />
          </div>
          <div className="gallery-item">
            <img src="/WhatsApp Image 2025-11-15 at 4.30.02 PM (5).jpeg" alt="Cosecha manual de café" />
          </div>
          <div className="gallery-item">
            <img src="/WhatsApp Image 2025-11-15 at 4.30.02 PM (4).jpeg" alt="Tueste artesanal" />
          </div>
        </div>
      </div>

      <section id="highlight-coffees" className="section highlight-section">
        <h2>Lo que hace único a Café Zapote</h2>
        <div className="highlight-grid">
          <article className="highlight-card">
            <h3>Café 100% orgánico de origen familiar</h3>
            <p>
              Nuestros cafetales nacen en el predio El Zapote, en Mesillas, Compostela, Nayarit (800–1200 msnm). Cuidamos cada
              planta con métodos orgánicos y respetuosos con la tierra.
            </p>
          </article>
          <article className="highlight-card">
            <h3>Proceso artesanal de la familia Salazar</h3>
            <p>
              Desde la recolección hasta el tostado, el café pasa por manos de la misma familia que lo siembra. Seleccionamos
              grano por grano para lograr cuerpo medio, notas dulces, aroma floral y final suave.
            </p>
          </article>
          <article className="highlight-card">
            <h3>Hecho para espacios con historia</h3>
            <p>
              Llevamos Café Zapote a cafeterías, funerarias, oficinas y hogares que buscan algo más que una taza. Queremos que
              cada sorbo cuente una historia de familia, tierra y esperanza.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

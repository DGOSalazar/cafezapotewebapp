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
              <a href="/history" className="btn primary">
                Nuestra Historia
              </a>
              <a href="/quote" className="btn ghost">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="hero-image-feature">
            <img src="/topImage.jpg" alt="Taza de Café Zapote" className="hero-cup" />
          </div>
        </div>

        <div id="coffee-gallery" className="hero-gallery">
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
    </section>
  );
}

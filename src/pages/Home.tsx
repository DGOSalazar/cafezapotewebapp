export function Home() {
  return (
    <section className="page home-page">
      <div className="hero hero-centered">
        <div className="hero-content-centered">
          <div className="hero-text-centered">
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
          <div className="hero-image-large">
            <img src="/topImage.jpg" alt="Taza de Café Zapote" className="hero-cup-large" />
          </div>
        </div>
      </div>
    </section>
  );
}

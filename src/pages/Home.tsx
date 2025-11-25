export function Home() {
  return (
    <section className="page home-page home-no-scroll">
      <div className="hero hero-compact">
        <div className="hero-row">
          <div className="hero-text-compact">
            <div className="hero-badge">☕ Café 100% Orgánico</div>
            <h1>Tradición que florece en cada taza</h1>
            <p>
              Somos una familia que cultiva café orgánico desde las montañas de Mesillas, Nayarit.
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
          <div className="hero-image-compact">
            <img src="/topImage.jpg" alt="Taza de Café Zapote" className="hero-cup-compact" />
          </div>
        </div>
      </div>
    </section>
  );
}

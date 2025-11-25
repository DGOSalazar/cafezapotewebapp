export function Home() {
  return (
    <section className="page home-page home-no-scroll">
      <div className="hero hero-centered-full">
        <div className="hero-content-centered">
          <div className="hero-badges">
            <span className="hero-badge">☕ Café 100% Orgánico</span>
            <span className="hero-badge">🏔️ Nayarita</span>
            <span className="hero-badge">🌿 Natural</span>
            <span className="hero-badge">💪 Sabor Intenso</span>
          </div>
          <h1 className="hero-lead-title">
            Más de 30 años cultivando café bajo la sombra de un zapote centenario.
          </h1>
          <p className="hero-description">
            Cada grano cuenta una historia de familia, tierra y pasión. Desde los cafetales del predio El Zapote 
            hasta tu taza, llevamos la tradición cafetalera de Mesillas con cuerpo medio, notas dulces y un aroma 
            que invita a regresar.
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
      </div>
    </section>
  );
}

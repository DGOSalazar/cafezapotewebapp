export function History() {
  return (
    <section className="page history-page">
      <header className="page-header">
        <h1>Nuestra Historia</h1>
        <p>
          En las montañas de Mesillas, Nayarit, un viejo árbol de zapote da sombra a los cafetales de nuestra familia.
        </p>
      </header>

      <div className="history-timeline">
        {/* Bloque 1: Texto izquierda, Imagen derecha */}
        <div className="history-row">
          <div className="history-text">
            <h2>Nuestras raíces familiares</h2>
            <p>
              Hace más de 30 años, Ernesto Salazar, campesino y cortador de café, cumplió su sueño de tener sus propios
              cafetales en Mesillas, Compostela, Nayarit. Junto a su esposa Estela, pionera en crear la marca y comenzar la
              distribución, sembraron una tradición que hoy continúa.
            </p>
          </div>
          <div className="history-image">
            <img src="/WhatsApp Image 2025-11-15 at 7.01.03 PM (1).jpeg" alt="Cafetales de Café Zapote" />
          </div>
        </div>

        {/* Bloque 2: Imagen izquierda, Texto derecha */}
        <div className="history-row reverse">
          <div className="history-text">
            <h2>Café orgánico cultivado con respeto</h2>
            <p>
              Cultivamos café 100% orgánico, variedades arábiga y colombiana, entre los 800 y 1200 msnm. Cuidamos el suelo,
              el agua y la biodiversidad, porque sabemos que una tierra viva es la base de cada buena cosecha.
            </p>
          </div>
          <div className="history-image">
            <img src="/WhatsApp Image 2025-11-15 at 4.30.02 PM (5).jpeg" alt="Cosecha manual de café" />
          </div>
        </div>

        {/* Bloque 3: Texto izquierda, Imagen derecha */}
        <div className="history-row">
          <div className="history-text">
            <h2>De nuestra familia a tu espacio</h2>
            <p>
              Hoy seguimos cultivando, procesando y distribuyendo nuestro propio café. Llevamos Café Zapote a cafeterías,
              funerarias y hogares que buscan una bebida con historia: cuerpo medio, notas dulces, aroma floral y un final
              suave que invita a regresar.
            </p>
          </div>
          <div className="history-image">
            <img src="/WhatsApp Image 2025-11-15 at 4.30.02 PM (4).jpeg" alt="Tueste artesanal" />
          </div>
        </div>

        {/* Bloque 4: Imagen izquierda, Texto derecha */}
        <div className="history-row reverse">
          <div className="history-text">
            <h2>Visión que mira al futuro</h2>
            <p>
              Nuestro sueño es que cada persona que pruebe Café Zapote sienta el trabajo honesto, la unión familiar y la
              esperanza que crece entre montañas. De raíces profundas, nace la vida. Tradición que florece.
            </p>
          </div>
          <div className="history-image">
            <img src="/WhatsApp Image 2025-11-15 at 7.01.03 PM (3).jpeg" alt="Predio El Zapote" />
          </div>
        </div>
      </div>

      <section className="highlight-section">
        <h2>Lo que hace único a Café Zapote</h2>
        <div className="highlight-grid">
          <article className="highlight-card">
            <h3>Café 100% orgánico</h3>
            <p>
              Nuestros cafetales nacen en el predio El Zapote, entre los 800 y 1200 msnm. Cuidamos cada planta con métodos orgánicos.
            </p>
          </article>
          <article className="highlight-card">
            <h3>Proceso artesanal</h3>
            <p>
              Desde la recolección hasta el tostado, el café pasa por manos de la misma familia que lo siembra.
            </p>
          </article>
          <article className="highlight-card">
            <h3>Hecho con historia</h3>
            <p>
              Cada sorbo cuenta una historia de familia, tierra y esperanza que invita a regresar.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

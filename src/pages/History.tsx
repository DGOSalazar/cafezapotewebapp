export function History() {
  return (
    <section className="page history-page">
      <header className="page-header">
        <h1>Tradición que florece bajo la sombra de un zapote</h1>
        <p>
          En las montañas de Mesillas, Nayarit, donde el aire huele a tierra y esperanza, un viejo árbol de zapote con más
          de cien años da sombra a los cafetales de nuestra familia. Ahí nace Café Zapote.
        </p>
      </header>

      <div className="history-layout">
        <div className="history-media" aria-label="Fotografías históricas de Café Zapote">
          <div className="image-placeholder tall">
            <img src="/WhatsApp Image 2025-11-15 at 7.01.03 PM (3).jpeg" alt="Predio El Zapote y las montañas de Mesillas" />
          </div>
        </div>

        <div className="history-content">
          <section className="history-block">
            <h2>Nuestras raíces familiares</h2>
            <p>
              Hace más de 30 años, Ernesto Salazar, campesino y cortador de café, cumplió su sueño de tener sus propios
              cafetales en Mesillas, Compostela, Nayarit. Junto a su esposa Estela, pionera en crear la marca y comenzar la
              distribución, sembraron una tradición que hoy continúa.
            </p>
          </section>

          <section className="history-block">
            <h2>Café orgánico cultivado con respeto</h2>
            <p>
              Cultivamos café 100% orgánico, variedades arábiga y colombiana, entre los 800 y 1200 msnm. Cuidamos el suelo,
              el agua y la biodiversidad, porque sabemos que una tierra viva es la base de cada buena cosecha.
            </p>
          </section>

          <section className="history-block">
            <h2>De nuestra familia a tu espacio</h2>
            <p>
              Hoy seguimos cultivando, procesando y distribuyendo nuestro propio café. Llevamos Café Zapote a cafeterías,
              funerarias y hogares que buscan una bebida con historia: cuerpo medio, notas dulces, aroma floral y un final
              suave que invita a regresar.
            </p>
          </section>

          <section className="history-block">
            <h2>Visión que mira al futuro</h2>
            <p>
              Nuestro sueño es que cada persona que pruebe Café Zapote sienta el trabajo honesto, la unión familiar y la
              esperanza que crece entre montañas. De raíces profundas, nace la vida. Tradición que florece.
            </p>
          </section>
        </div>
      </div>

      <section className="section highlight-section">
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

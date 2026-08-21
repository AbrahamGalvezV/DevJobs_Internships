import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>

      {/* HERO */}
      <section className={styles.hero}>
        <img
          className={styles.heroImg}
          src="./background.jpg"
          alt=""
        />

        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            DEVJOBS · CONTACTO
          </span>

          <h1>
            Estamos aquí para
            <span> ayudarte</span>
          </h1>

          <p>
            ¿Tienes alguna duda, sugerencia o necesitas ayuda?
            Ponte en contacto con nuestro equipo y estaremos encantados
            de ayudarte.
          </p>
        </div>
      </section>


      {/* INFORMACIÓN DE CONTACTO */}
      <section className={styles.contactSection}>

        <header className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            HABLEMOS
          </span>

          <h2>
            ¿Cómo podemos ayudarte?
          </h2>

          <p>
            Tanto si eres profesional como si representas a una empresa,
            puedes contactar con nosotros para resolver cualquier duda
            relacionada con DevJobs.
          </p>
        </header>


        <div className={styles.contactGrid}>

          {/* EMAIL */}
          <article className={styles.contactCard}>
            <div className={styles.icon}>
              ✉
            </div>

            <h3>
              Escríbenos
            </h3>

            <p>
              Para consultas generales, problemas con tu cuenta o cualquier
              otra cuestión relacionada con la plataforma.
            </p>

            <a href="mailto:info@devjobs.com">
              info@devjobs.com
            </a>
          </article>


          {/* EMPRESAS */}
          <article className={styles.contactCard}>
            <div className={styles.icon}>
              &lt;/&gt;
            </div>

            <h3>
              Empresas
            </h3>

            <p>
              ¿Quieres publicar ofertas de empleo o necesitas ayuda para
              encontrar talento tecnológico?
            </p>

            <a href="mailto:empresas@devjobs.com">
              empresas@devjobs.com
            </a>
          </article>


          {/* SOPORTE */}
          <article className={styles.contactCard}>
            <div className={styles.icon}>
              ?
            </div>

            <h3>
              Soporte
            </h3>

            <p>
              Si tienes problemas utilizando DevJobs, ponte en contacto
              con nuestro equipo de soporte.
            </p>

            <a href="mailto:soporte@devjobs.com">
              soporte@devjobs.com
            </a>
          </article>

        </div>
      </section>


      {/* FAQ */}
      <section className={styles.faqSection}>

        <header className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>
            PREGUNTAS FRECUENTES
          </span>

          <h2>
            Antes de contactar con nosotros
          </h2>

          <p>
            Quizás encuentres la respuesta que buscas aquí.
          </p>
        </header>


        <div className={styles.faqGrid}>

          <article>
            <h3>
              ¿Puedo publicar una oferta de empleo?
            </h3>

            <p>
              Sí. DevJobs está orientado tanto a profesionales que buscan
              empleo como a empresas que necesitan incorporar talento
              tecnológico.
            </p>
          </article>


          <article>
            <h3>
              ¿Puedo guardar ofertas como favoritas?
            </h3>

            <p>
              Sí. Si tienes una cuenta puedes guardar tus ofertas favoritas
              y consultarlas posteriormente desde tu perfil.
            </p>
          </article>


          <article>
            <h3>
              ¿Necesito una cuenta para buscar empleo?
            </h3>

            <p>
              No. Puedes utilizar el buscador y consultar las ofertas
              disponibles sin necesidad de registrarte.
            </p>
          </article>


          <article>
            <h3>
              ¿Cómo puedo comunicar un problema?
            </h3>

            <p>
              Puedes utilizar el formulario de contacto de esta página
              seleccionando la opción relacionada con soporte.
            </p>
          </article>

        </div>

      </section>

    </main>
  );
}
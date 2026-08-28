import { useFilters } from "../../components/Hooks/useFilter";
import { Search } from "../../components/Search/Search";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const {
    textToFilter,
    handleTextFilter,
    handleClearFilter,
    filters,
  } = useFilters();

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          className={styles.heroImg}
          src="./background.jpg"
          alt="Desarrollador trabajando"
        />

        <div className={styles.heroContent}>
          <Search
            initialText={textToFilter}
            onTextFilter={handleTextFilter}
            onClearFilter={handleClearFilter}
            filters={filters}
            showSearchButton={true}
            showFilters={false}
          />
        </div>
      </section>

      {/* POR QUÉ DEVJOBS */}
      <section className={styles.whyDevjobs}>
        <header className={styles.sectionHeader}>
          <h2>¿Por qué DevJobs?</h2>

          <p>
            Encontrar un empleo tecnológico no debería ser complicado.
            DevJobs conecta a desarrolladores con oportunidades que se
            adaptan a sus conocimientos y experiencia.
          </p>
        </header>

        <div className={styles.features}>
          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>
              🔎
            </div>

            <h3>Encuentra tu próximo trabajo</h3>

            <p>
              Busca entre cientos de ofertas de empleo tecnológico y
              encuentra oportunidades relacionadas con tus habilidades.
            </p>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>
              💻
            </div>

            <h3>Ofertas para desarrolladores</h3>

            <p>
              Filtra las ofertas por tecnología, ubicación y nivel de
              experiencia para encontrar las que mejor encajen contigo.
            </p>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>
              ❤️
            </div>

            <h3>Guarda tus favoritos</h3>

            <p>
              Guarda las ofertas que más te interesen y vuelve a ellas
              cuando quieras.
            </p>
          </article>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className={styles.howItWorks}>
        <header className={styles.sectionHeader}>
          <h2>¿Cómo funciona?</h2>

          <p>
            Encontrar una nueva oportunidad profesional es muy sencillo.
          </p>
        </header>

        <div className={styles.steps}>
          <article className={styles.step}>
            <span>01</span>

            <h3>Busca</h3>

            <p>
              Introduce una tecnología, puesto, empresa o habilidad en el
              buscador.
            </p>
          </article>

          <article className={styles.step}>
            <span>02</span>

            <h3>Filtra</h3>

            <p>
              Utiliza nuestros filtros para encontrar ofertas que se
              adapten a tus preferencias.
            </p>
          </article>

          <article className={styles.step}>
            <span>03</span>

            <h3>Encuentra</h3>

            <p>
              Consulta los detalles de cada oferta y descubre tu próxima
              oportunidad profesional.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>¿Preparado para encontrar tu próximo empleo?</h2>

        <p>
          Explora las ofertas disponibles y encuentra una oportunidad
          acorde a tu perfil.
        </p>

        <a href="/search" className={styles.ctaButton}>
          Ver ofertas de empleo
        </a>
      </section>
    </main>
  );
}
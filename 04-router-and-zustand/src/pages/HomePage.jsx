import { useFilters } from "../components/Hooks/useFilter";
import { Search } from "../components/Search/Search";

export default function HomePage() {
  const {
    total,
    loading,
    currentPage,
    textToFilter,
    handleTextFilter,
    handleClearFilter,
    filters,
  } = useFilters();

  const title = loading
    ? "Cargando... DevJobs"
    : `Resultados: ${total}, Página ${currentPage} - DevJobs`;

  return (
    <main>
      <section>
        <img
          src="./background.jpg"
          width="200"
          alt="Background"
        />

        <Search
          initialText={textToFilter}
          onTextFilter={handleTextFilter}
          onClearFilter={handleClearFilter}
          filters={filters}
          showSearchButton={true}
        />
      </section>

      <section>
        <header>
          <h2>¿Por qué DevJobs?</h2>

          <p>
            DevJobs es la principal plataforma de búsqueda de empleo para
            desarrolladores. Conectamos a los mejores talentos con las empresas
            más innovadoras.
          </p>
        </header>

        <footer>
          <article>
            <h3>Encuentra el trabajo de tus sueños</h3>
            <p>
              Busca miles de empleos de las mejores empresas de todo el mundo.
            </p>
          </article>

          <article>
            <h3>Conecta con las mejores empresas</h3>
            <p>
              Conecta con empresas que están contratando por tus habilidades.
            </p>
          </article>

          <article>
            <h3>Obtén el salario que mereces</h3>
            <p>
              Obtén el salario que mereces con nuestra calculadora de salarios.
            </p>
          </article>
        </footer>
      </section>
    </main>
  );
}


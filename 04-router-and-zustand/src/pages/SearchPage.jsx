import { Pagination } from "../components/Pagination/Pagination";
import { JobListings } from "../components/JobListingCard/JobListingCard";
import { Search } from "../components/Search/Search";
import { Spinner } from "../components/Spinner/Spinner";
import { useFilters } from "../components/Hooks/useFilter";

export default function SearchPage() {
  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
    textToFilter,
    handleSearch,
    handlePageChange,
    handleTextFilter,
    handleClearFilter,
    filters,
  } = useFilters();

  const title = loading
    ? `Cargando...DEvJobs`
    : `Resutados: ${total}, Página ${currentPage} - DevJobs`;

  return (
    <main>
      <title>{title}</title>
      <meta
        name="description"
        content="Explirar miles de oportunidades reales en el sector tecnológico. Encuentra tu proximo empleo en DevJobs"
      />

      <Search
        initialText={textToFilter}
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
        onClearFilter={handleClearFilter}
        filters={filters}
        showFilters={true}
      />

      <section>
        <h2>Resultados de búsqueda</h2>

        {loading ? <Spinner /> : <JobListings jobs={jobs} />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}

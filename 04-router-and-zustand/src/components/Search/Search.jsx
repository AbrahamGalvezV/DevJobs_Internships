import { useId, useState } from "react";
import { useSearchForm } from "../Hooks/useSearchForm";
import { useNavigate } from "react-router";
import styles from "./Search.module.css";

export function Search({
  onSearch,
  onTextFilter,
  onClearFilter,
  filters,
  initialText,
  showSearchButton = false,
  showFilters = true,
}) {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();

  const navigate = useNavigate();

  const { handleSubmit, handleTextChange } = useSearchForm({
    idTechnology,
    idLocation,
    idExperienceLevel,
    onSearch,
    onTextFilter,
    idText,
  });

  const [searchTerm, setSearchTerm] = useState(initialText || "");

  const clearInput = () => {
    setSearchTerm("");

    handleTextChange({
      target: {
        name: idText,
        value: "",
      },
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    navigate(`/search?text=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <section className={styles.jobsSearch}>
      <h1 className={styles.jobsSearch_h1}>Encuentra tu próximo trabajo</h1>

      <p>Explora miles de oportunidades en el sector tecnológico</p>

      <form
        onChange={handleSubmit}
        onSubmit={handleSearch}
        id="empleos-search"
        role="search"
      >
        <div className={styles.searchBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            className={styles.searchInput}
            name={idText}
            id="empleos-search-input"
            type="text"
            value={searchTerm}
            placeholder="Busca trabajos, empresas o habilidades"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleTextChange(e);
            }}
          />

          {showSearchButton && searchTerm.trim() && (
            <button type="submit" className={styles.searchButton}>
              Buscar
            </button>
          )}

          {searchTerm.trim() && (
            <button
              type="button"
              className={styles.resetButton}
              onClick={clearInput}
            >
              X
            </button>
          )}
        </div>

        {showFilters && (
          <div className={styles.searchFilters}>
            <select
              name={idTechnology}
              id="filter-technology"
              value={filters.technology}
              onChange={handleSubmit}
            >
              <option value="">Tecnología</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="java">Java</option>
            </select>

            <select
              name={idLocation}
              id="filter-location"
              value={filters.location}
              onChange={handleSearch}
            >
              <option value="">Ubicación</option>
              <option value="remoto">Remoto</option>
              <option value="cdmx">Ciudad de México</option>
              <option value="guadalajara">Guadalajara</option>
              <option value="monterrey">Monterrey</option>
              <option value="madrid">Madrid</option>
            </select>

            <select
              name={idExperienceLevel}
              id="experience-level"
              value={filters.experienceLevel}
              onClick={handleSearch}
            >
              <option value="">Nivel de experiencia</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>

            {(filters.technology ||
              filters.location ||
              filters.experienceLevel) && (
              <button type="button" onClick={onClearFilter}>
                Limpiar selectores
              </button>
            )}
          </div>
        )}
      </form>
    </section>
  );
}

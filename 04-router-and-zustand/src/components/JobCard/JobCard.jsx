import { useState } from "react";
import { Link } from "react-router";

import styles from "./JobCard.module.css";

import { useFavoritesStore } from "../../Store/favoritesStore";
import { useAuthStore } from "../../Store/authStore";


function JobCardFavoriteButton({ jobId }) {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const { isLoggedIn } = useAuthStore();

  return (
    <button
      type="button"
      className={styles.favoriteButton}
      disabled={!isLoggedIn}
      onClick={() => toggleFavorite(jobId)}
      aria-label={
        isFavorite(jobId)
          ? "Eliminar de favoritos"
          : "Añadir a favoritos"
      }
    >
      {isFavorite(jobId) ? "❤️" : "🤍"}
    </button>
  );
}


function JobCardApplyButton() {
  const [isApplied, setIsApplied] = useState(false);
  const { isLoggedIn } = useAuthStore();

  const handleApplyClick = () => {
    setIsApplied(true);
  };

  return (
    <button
      type="button"
      disabled={!isLoggedIn}
      className={`${styles.applyButton} ${
        isApplied ? styles.isApplied : ""
      }`}
      onClick={handleApplyClick}
    >
      {isApplied ? "¡Aplicado!" : "Aplicar"}
    </button>
  );
}


export function JobCard({ job }) {
  return (
    <article
      className={styles.jobListingCard}
      data-modalidad={job.data.modalidad}
      data-nivel={job.data.nivel}
      data-technology={job.data.technology}
    >
      <div className={styles.jobInfo}>
        <h3>
          <Link
            className={styles.title}
            to={`/jobs/${job.id}`}
          >
            {job.titulo}
          </Link>
        </h3>

        <small>
          {job.empresa} | {job.ubicacion}
        </small>

        <p>{job.descripcion}</p>
      </div>

      <div className={styles.actions}>
        <Link
          to={`/jobs/${job.id}`}
          className={styles.details}
        >
          Ver detalles
        </Link>

        <JobCardApplyButton />

        <JobCardFavoriteButton jobId={job.id} />
      </div>
    </article>
  );
}
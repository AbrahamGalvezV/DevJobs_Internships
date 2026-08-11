import { NavLink } from "react-router";
import { useAuthStore } from "../../Store/authStore";
import { useFavoritesStore } from "../../Store/favoritesStore";

import styles from "./Header.module.css"

export function Header() {
  const { isLoggedIn } = useAuthStore();
  const { countFavorites } = useFavoritesStore();

  const numberOfFavorites = countFavorites();

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "white" }}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            DevJobs
          </h1>
        </NavLink>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Empleos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Contacto
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Login
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) => (isActive ? "nav-link-active" : "")}
              to="/profile"
            >
              Profile{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
              </svg>
              {numberOfFavorites}
            </NavLink>
          )}
        </nav>

        <HeaderUserButton />
      </header>
    </>
  );
}

const HeaderUserButton = () => {
  const { isLoggedIn, login, logout } = useAuthStore();
  const { clearFavorites } = useFavoritesStore()

  const handleLogout = () => {
    logout()
    clearFavorites()
  }

  return isLoggedIn ? (
    <button onClick={handleLogout}>Cerrar sesión</button>
  ) : (
    <button onClick={login}>Iniciar sesión</button>
  );
};

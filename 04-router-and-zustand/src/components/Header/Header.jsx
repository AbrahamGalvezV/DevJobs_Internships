import { useState } from "react";
import { NavLink } from "react-router";

import { useAuthStore } from "../../Store/authStore";
import { useFavoritesStore } from "../../Store/favoritesStore";

import styles from "./Header.module.css";

export function Header() {
  const { isLoggedIn } = useAuthStore();
  const { countFavorites } = useFavoritesStore();

  const numberOfFavorites = countFavorites();

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>

      {/* LOGO */}
<NavLink
  to="/"
  className={`${styles.logo} ${menuOpen ? styles.logoHidden : ""}`}
  onClick={closeMenu}
>
  <h1>
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>

    DevJobs
  </h1>
</NavLink>

      {/* BOTÓN HAMBURGUESA */}
      <button
        type="button"
        className={`${styles.menuButton} ${
          menuOpen ? styles.menuButtonOpen : ""
        }`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAVEGACIÓN */}
<nav
  className={`${styles.nav} ${
    menuOpen ? styles.navOpen : ""
  }`}
>
  <NavLink
    to="/"
    onClick={closeMenu}
    className={({ isActive }) =>
      `${styles.navLink} ${
        isActive ? styles.activeLink : ""
      }`
    }
  >
    Inicio
  </NavLink>

  <NavLink
    to="/search"
    onClick={closeMenu}
    className={({ isActive }) =>
      `${styles.navLink} ${
        isActive ? styles.activeLink : ""
      }`
    }
  >
    Empleos
  </NavLink>

  <NavLink
    to="/contact"
    onClick={closeMenu}
    className={({ isActive }) =>
      `${styles.navLink} ${
        isActive ? styles.activeLink : ""
      }`
    }
  >
    Contacto
  </NavLink>

  <NavLink
    to="/login"
    onClick={closeMenu}
    className={({ isActive }) =>
      `${styles.navLink} ${
        isActive ? styles.activeLink : ""
      }`
    }
  >
    Regístrate
  </NavLink>

  {isLoggedIn && (
    <NavLink
      to="/profile"
      onClick={closeMenu}
      className={({ isActive }) =>
        `${styles.navLink} ${
          isActive ? styles.activeLink : ""
        }`
      }
    >
      Profile

      {/* SVG de favoritos */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />

        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185-.048.041-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082-7.493-7.422a6 6 0 0 1 3.176-10.215z" />
      </svg>

      <span>{numberOfFavorites}</span>
    </NavLink>
  )}
</nav>

<HeaderUserButton closeMenu={closeMenu} />
    </header>
  );
}


const HeaderUserButton = ({ closeMenu }) => {
  const { isLoggedIn, login, logout } = useAuthStore();
  const { clearFavorites } = useFavoritesStore();

  const handleLogout = () => {
    logout();
    clearFavorites();
    closeMenu();
  };

  const handleLogin = () => {
    login();
    closeMenu();
  };

  return isLoggedIn ? (
    <button
      type="button"
      className={styles.userButton}
      onClick={handleLogout}
    >
      Cerrar sesión
    </button>
  ) : (
    <button
      type="button"
      className={styles.userButton}
      onClick={handleLogin}
    >
      Iniciar sesión
    </button>
  );
};
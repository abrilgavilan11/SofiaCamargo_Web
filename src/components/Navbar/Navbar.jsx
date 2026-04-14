import { useState } from "react";
import styles from "./Navbar.module.css";

import logo from "../../assets/img/logo/logo_sofiacamargo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <a href="#" className={styles.navLogo} onClick={closeMenu}>
          <img
            src={logo}
            alt="Sofía Camargo Logo"
            className={styles.navLogoImg}
          />
        </a>

        {/* Botón Hamburguesa */}
        <button
          className={`${styles.hamburgerBtn} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Menú de links */}
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <a href="#conoceme" className={styles.navLink} onClick={closeMenu}>
              Conoceme
            </a>
          </li>
          <li>
            <a href="#proyectos" className={styles.navLink} onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#participa" className={styles.navLink} onClick={closeMenu}>
              Participá
            </a>
          </li>
          <li>
            <a href="#contacto" className={styles.navLink} onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

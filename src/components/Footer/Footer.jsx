import styles from "./Footer.module.css";
import logoEvolucion from "../../assets/img/logo/evolucion.png";

const Footer = () => {
  return (
    <footer id="contacto" className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        {/* Identidad Institucional */}
        <div className={styles.footerBrand}>
          <img
            src={logoEvolucion}
            alt="Logo Evolución Plottier"
            className={styles.footerLogo}
          />
          <p>
            Sofía Camargo - Concejal
            <br />
            de la ciudad de Plottier.
          </p>
        </div>

        <hr className={styles.footerDivider} />

        {/* Contacto */}
        <div className={styles.footerSection}>
          <h4>Contacto</h4>
          <a href="tel:+54929942142256" className={styles.footerLink}>
            <span className={styles.icon}>📞</span> 299 421 42256
          </a>
          <a
            href="mailto:sofiacaamargoconcejal@gmail.com"
            className={styles.footerLink}
          >
            <span className={styles.icon}>✉️</span>{" "}
            sofiacaamargoconcejal@gmail.com
          </a>
        </div>

        <hr className={styles.footerDivider} />

        {/* Redes Sociales */}
        <div className={styles.footerSection}>
          <h4>Redes Sociales</h4>
          <a
            href="https://www.instagram.com/soficamargoconcejal/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <span className={styles.icon}>📸</span> soficamargoconcejal
          </a>
          <a
            href="https://tiktok.com/@soficamargoconcejal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            <span className={styles.icon}>🎵</span> soficamargoconcejal
          </a>
        </div>

        <hr className={styles.footerDivider} />

        {/* Legales y Firma */}
        <div className={styles.footerBottom}>
          <p>© 2026 Sofía Camargo. Todos los derechos reservados</p>
          <p>Desarrollado por Abril Gavilan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

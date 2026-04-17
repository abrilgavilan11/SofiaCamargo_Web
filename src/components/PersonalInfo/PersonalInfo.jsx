import { useRef, useState } from "react";
import styles from "./PersonalInfo.module.css";

import img1 from "../../assets/carousel/carousel-001.jpeg";
import img2 from "../../assets/carousel/carousel-002.jpeg";
import img3 from "../../assets/carousel/carousel-003.jpeg";
import img4 from "../../assets/carousel/carousel-004.jpeg";
import img5 from "../../assets/carousel/carousel-005.jpeg";

const PersonalInfo = () => {
  const fotosCirculares = [img1, img2, img3, img4, img5];

  const carouselRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; 
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="conoceme" className={styles.personalSection}>
      <div className={styles.containerPersonal}>
        <h2 className={styles.sectionTitle}>Conoceme💜</h2>

        {/* Texto Introductorio */}
        <div className={styles.bioText}>
          <p>
            ¡Hola! Soy Sofía. Nací y crecí en esta hermosa ciudad. Mi compromiso
            es trabajar todos los días para transformar nuestra realidad,
            escuchando a cada vecino y proponiendo soluciones reales. Creo
            firmemente que la política es la mejor herramienta para mejorar la
            vida de la gente.
          </p>
        </div>

        {/* Tarjetas de Datos */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.circleBadge}>27</div>
            <p>Años</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconBadge}>🎂</div>
            <p>3 de Septiembre</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.iconBadge}>♍</div>
            <p>Virgo</p>
          </div>
        </div>

        {/* Carrusel de Círculos Arrastrable */}
        <div
          className={`${styles.circleCarousel} ${isDown ? styles.active : ""}`}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {fotosCirculares.map((foto, index) => (
            <div key={index} className={styles.circleItem}>
              <img
                src={foto}
                alt={`Sofía momento ${index + 1}`}
                draggable="false"
              />
            </div>
          ))}
        </div>

        {/* Pista visual para el usuario */}
        <p className={styles.swipeHint}>← Deslizá para ver más →</p>
      </div>
    </section>
  );
};

export default PersonalInfo;

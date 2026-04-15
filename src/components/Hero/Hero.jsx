// src/components/Hero/Hero.jsx
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

import profileImg from "../../assets/hero/img-hero.png";
import caruselImg1 from "../../assets/carousel/carousel-001.jpeg";
import caruselImg2 from "../../assets/carousel/carousel-004.jpeg";
import caruselImg3 from "../../assets/carousel/carousel-002.jpeg";

const Hero = () => {
  const slides = [
    { id: 0, img: caruselImg1, alt: "Sofía con vecinos" },
    { id: 1, img: caruselImg2, alt: "Sofía en el concejo" },
    { id: 2, img: caruselImg3, alt: "Proyecto Eco Canje" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroLayout}>
        {/* LADO IZQUIERDO: Información y Perfil */}
        <div className={styles.heroContent}>
          <div className={styles.profileImgContainer}>
            <img
              src={profileImg}
              alt="Sofía Camargo"
              className={styles.profileImg}
            />
          </div>
          <h1 className={styles.heroTitle}>Sofía Isis Camargo</h1>
          <p className={styles.heroSubtitle}>
            Concejal de Plottier | Bloque Evolución
          </p>
          <div className={styles.heroButtons}>
            <a
              href="#contacto"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Contactame
            </a>
            <a
              href="#proyectos"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              Proyectos
            </a>
          </div>
        </div>

        {/* LADO DERECHO: Carrusel */}
        <div className={styles.heroCarouselWrapper}>
          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className={styles.carouselSlide}>
                  <img src={slide.img} alt={slide.alt} />
                </div>
              ))}
            </div>

            <button
              className={`${styles.carouselBtn} ${styles.prev}`}
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className={`${styles.carouselBtn} ${styles.next}`}
              onClick={nextSlide}
            >
              &#10095;
            </button>

            <div className={styles.carouselDots}>
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import styles from "./Projects.module.css";

import logoEcoCanje from "../../assets/img/logo/ecocanje.png";
import logoBici from "../../assets/img/logo/bicis.png";
import logoTejedoras from "../../assets/img/logo/tejedoras.png";
import flyerEco1 from "../../assets/projects/ecocanje/1.png";
import flyerEco2 from "../../assets/projects/ecocanje/2.png";
import flyerTejedoras from "../../assets/projects/tejedoras/tejedoras.png";

const Projects = () => {
  const projectsData = [
    {
      id: "ecocanje",
      title: "Eco Canje",
      logo: logoEcoCanje,
      shortDesc:
        "Intercambiamos reciclables por plantines para fomentar el cuidado del medio ambiente en nuestros barrios.",
      flyers: [flyerEco1, flyerEco2],
    },
    {
      id: "bicis",
      title: "Taller de Bicicletas",
      logo: logoBici,
      shortDesc:
        "Recuperamos y reparamos bicicletas para darles una nueva vida y promover la movilidad sustentable.",
      flyers: [], 
    },
    {
      id: "tejedoras",
      title: "Tejedoras",
      logo: logoTejedoras,
      shortDesc:
        "Fomentamos la artesanía textil y la empoderamiento de las mujeres en nuestra comunidad.",
      flyers: [flyerTejedoras], 
    }

  ];

  const [activeProject, setActiveProject] = useState(null);
  const [currentFlyer, setCurrentFlyer] = useState(0);

  useEffect(() => {
    setCurrentFlyer(0);
  }, [activeProject]);

  const nextFlyer = () => {
    if (activeProject) {
      setCurrentFlyer((prev) => (prev + 1) % activeProject.flyers.length);
    }
  };

  const prevFlyer = () => {
    if (activeProject) {
      setCurrentFlyer(
        (prev) =>
          (prev - 1 + activeProject.flyers.length) %
          activeProject.flyers.length,
      );
    }
  };

  return (
    <section id="proyectos" className={styles.projectsSection}>
      <div className={styles.containerProjects}>
        <h2 className={styles.sectionTitle}>Proyectos en Marcha</h2>

        {/* Texto introductorio */}
        <p className={styles.sectionIntro}>
          Nuestras iniciativas nacen de caminar las calles de Plottier y
          escuchar a los vecinos. Buscamos generar un impacto real, promoviendo
          la sustentabilidad, la inclusión y el desarrollo de nuestra comunidad.
          Conocé lo que estamos haciendo.
        </p>

        {/* Grilla de Tarjetas */}
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImgWrapper}>
                <img src={project.logo} alt={project.title} />
              </div>
              <p className={styles.projectDesc}>{project.shortDesc}</p>

              <button
                className={styles.btnOutlineDark}
                onClick={() => setActiveProject(project)}
              >
                Más Info ➔
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL --- */}
      {activeProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveProject(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={styles.closeModal}
              onClick={() => setActiveProject(null)}
            >
              &times;
            </span>

            <h3 className={styles.modalTitle}>
              Conocé más de: {activeProject.title}
            </h3>

            {activeProject.flyers.length > 0 ? (
              <div className={styles.carouselWrapper}>
                {activeProject.flyers.length > 1 && (
                  <>
                    <button
                      className={`${styles.flyerBtn} ${styles.prev}`}
                      onClick={prevFlyer}
                    >
                      &#10094;
                    </button>
                    <button
                      className={`${styles.flyerBtn} ${styles.next}`}
                      onClick={nextFlyer}
                    >
                      &#10095;
                    </button>
                  </>
                )}

                <div className={styles.flyerCarousel}>
                  <div
                    className={styles.flyerTrack}
                    style={{ transform: `translateX(-${currentFlyer * 100}%)` }}
                  >
                    {activeProject.flyers.map((flyer, index) => (
                      <div key={index} className={styles.flyerSlide}>
                        <img src={flyer} alt={`Flyer ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {activeProject.flyers.length > 1 && (
                  <p className={styles.swipeHint}>
                    ← Usá las flechas para ver más →
                  </p>
                )}
              </div>
            ) : (
              <p className={styles.noFlyersMsg}>
                Próximamente más información sobre este proyecto.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

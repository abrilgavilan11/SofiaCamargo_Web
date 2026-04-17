import styles from "./ActionForm.module.css";

const ActionForm = () => {
  return (
    <section id="participa" className={styles.actionSection}>
      <div className={styles.containerAction}>
        <h2 className={styles.sectionTitle}>Sumate a la Acción</h2>

        {/* Texto introductorio */}
        <p className={styles.sectionIntro}>
          Las grandes transformaciones empiezan con pequeños pasos en cada
          barrio. Si querés sumarte a nuestras jornadas de forestación,
          participar del Eco-Canje o simplemente acercarnos una inquietud sobre
          tu cuadra, este es tu espacio.
          <strong> ¡Tu voz es el motor de Plottier!</strong>
        </p>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <h3>Dejanos tus datos</h3>
            <p>
              Completá el formulario y nos pondremos en contacto con vos para la
              próxima actividad.
            </p>
          </div>

          <div className={styles.iframeContainer}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfe7wSV4mUMzPszVl_vfQpy_urv-juwWeR6e5pj7StQ8KMpKw/viewform"
              width="100%"
              height="750"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulario de Participación"
            >
              Cargando formulario...
            </iframe>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <a
            href="https://www.concejoplottier.gob.ar/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnActionOutline}
          >
            <span className={styles.btnIcon}>🏛️</span> Visita la web del Concejo
            Deliberante
          </a>
          <a
            href="https://www.instagram.com/evolucion.plottier/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnActionOutline}
          >
            <span className={styles.btnIcon}>📱</span> Seguí a
            @evolucion.plottier en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActionForm;

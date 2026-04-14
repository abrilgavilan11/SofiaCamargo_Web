import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />

      <main>
        <h1>Bienvenido a Nuestra Página</h1>
        <h2>¡Gracias por visitarnos!</h2>
        <p>
          En esta página encontrarás toda la información sobre nuestros proyectos,
          cómo participar y contactarnos. Estamos comprometidos con el desarrollo
          de nuestra comunidad y queremos que formes parte de este cambio.
        </p>
        <p>
          Navega por las secciones para conocernos mejor, descubrir nuestros
          proyectos actuales y futuros, y cómo puedes sumarte a la acción. ¡Juntos
          podemos hacer la diferencia!
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

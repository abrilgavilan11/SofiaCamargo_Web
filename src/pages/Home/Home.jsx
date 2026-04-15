import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />

      <Footer />
    </div>
  );
};

export default Home;

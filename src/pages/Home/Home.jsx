import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Hero />
      <PersonalInfo />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;

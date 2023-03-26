import styles from "./App.module.scss";
import Greeting from "./components/greeting/greeting";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className={styles["wrapper"]}>
        <Greeting />
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;

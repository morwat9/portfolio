import styles from "./about.module.scss";
import ReactLogo from "../../resources/react-js-icon.svg";
import ExpressLogo from "../../resources/express-js-icon.svg";
import MongoLogo from "../../resources/mongodb-icon.svg";
import NextLogo from "../../resources/nextjs-icon.svg";
import NodeLogo from "../../resources/node-js-icon.svg";
import SassLogo from "../../resources/sass-icon.svg";

export default function About() {
  const techStack = [
    { name: "React", logo: ReactLogo },
    { name: "Express.js", logo: ExpressLogo },
    { name: "MongoDB", logo: MongoLogo },
    { name: "Next.js", logo: NextLogo },
    { name: "Node.js", logo: NodeLogo },
    { name: "Sass", logo: SassLogo },
  ];

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <span>About</span>
      </div>
      <div className={styles["body"]}>
        <div className={styles["about-left"]}>
          <a className={styles["about-link"]} href="https://github.com/morwat9">
            Github
          </a>
          <a className={styles["about-link"]} href="mailto:morwat9@hotmail.com">
            Email Me
          </a>
        </div>
        <div className={styles["about-right"]}>
          <div className={styles["introduction"]}>
            <p>
              Hello! I'm a full stack developer from Chicago with Filipino and
              Polish roots.
              <br />
              I found a home in Los Angeles in 2016 and I've been programming
              ever since.
              <br />
              <br />
              Here's my current tech stack.
            </p>
          </div>
          <div className={styles["tech-container"]}>
            {techStack.map((tech) => (
              <div className={styles["tech-card"]} key={tech.name}>
                <img src={tech.logo} alt={tech.name} width={35} height={35} />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

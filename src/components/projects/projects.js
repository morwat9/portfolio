import styles from "./projects.module.scss";
import DvrIcon from "@mui/icons-material/Dvr";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Projects() {
  const projectList = [
    {
      name: "link_foundation",
      demoLink: "https://life-invader-82438ouii-morwat9.vercel.app",
      githubLink: "https://github.com/morwat9/life_invader",
      apiGithubLink: "https://github.com/morwat9/life_invader_api",
      description:
        "list_foundation is a classified advertisements website for Los Angeles, but in a 'feed' format! Posts can be liked and commented on. Made using React, Next.js, Express.js, and MongoDB. ",
    },
    {
      name: "Loopstudios",
      demoLink: "https://morwat9.github.io/loopstudios-frontendmentor/",
      githubLink: "https://github.com/morwat9/loopstudios",
      description:
        "Loopstudios is a home page for a company specializing in virtual reality. Made with React and styled with CSS.",
    },
    {
      name: "Portfolio Website",
      demoLink: "PLACEHOLDER",
      githubLink: "PLACEHOLDER",
      description:
        "The humble portfolio website that you're currently looking at. React that's styled with Sass, with some help from Material UI.",
    },
    {
      name: "yesNo API",
      demoLink: "https://yesno-api.vercel.app/",
      githubLink: "https://github.com/morwat9/yesno-api",
      description:
        "yesNo API is an homage to isEven API. A tongue in cheek, API reference page I created to try out Chakra UI. In total, this project uses React and Next.js, styled with Chakra UI and CSS.",
    },
  ];

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["projects"]}>
        <div className={styles["header"]}>
          <span>Projects</span>
        </div>
        <div className={styles["project-container"]}>
          {projectList.map((project) => (
            <div className={styles["project-card"]} key={project.name}>
              <div className={styles["project-name"]}>
                <a href={project.demoLink}>
                  <DvrIcon fontSize="small" />
                  {project.name}
                </a>
              </div>
              <div className={styles["project-description"]}>
                {project.description}
              </div>
              <div className={styles["project-links"]}>
                <a href={project.githubLink}>
                  Github
                  <OpenInNewIcon fontSize="10px" />
                </a>
                {project.apiGithubLink ? (
                  <a href={project.apiGithubLink}>
                    API Github
                    <OpenInNewIcon fontSize="10px" />
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

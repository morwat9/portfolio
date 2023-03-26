import styles from "./footer.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div className={styles["wrapper"]}>
      <span>
        <span>Michael Orwat</span>
        <span>|</span>
        <a href="https://github.com/morwat9">
          <GitHubIcon />
        </a>
        <a href="mailto:morwat9@hotmail.com">
          <EmailIcon />
        </a>
      </span>
    </div>
  );
}

import styles from "./greeting.module.scss";

export default function Greeting() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["greeting-container"]}>
        <div className={styles["greeting-title"]}>
          <span>
            Hello, I'm <br className={styles["break"]} />{" "}
            <span className={styles["highlight"]}>Michael Orwat</span>.
          </span>
        </div>
        <div className={styles["greeting-message"]}>
          <span>
            A full stack web developer based in <span>Los Angeles, CA.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

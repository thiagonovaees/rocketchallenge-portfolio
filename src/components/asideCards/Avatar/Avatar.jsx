import styles from "./Avatar.module.css";

export function Avatar() {
  return (
    <div className={styles.avatar}>
      <img
        className={styles.avatarImg}
        src="https://github.com/thiagonovaees.png"
        alt="Avatar"
      />
      <strong>Thiago Novaes</strong>
      <span>Front End Developer</span>
    </div>
  );
}

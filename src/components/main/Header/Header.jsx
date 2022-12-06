import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <strong>My Projects</strong>
      <span>Veja Todos</span>
    </header>
  );
}

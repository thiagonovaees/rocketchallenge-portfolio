import { FolderSimple, GitPullRequest, Star, Circle } from "phosphor-react";
import styles from "./ProjectCard.module.css";

export function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <header>
        <FolderSimple size={20} />
        <strong>my-onyx</strong>
      </header>
      <main>
        <p>
          Consulte os códigos de erro que aparecem no painel do veículo Onix.
        </p>
      </main>
      <footer>
        <div className={styles.socialFooter}>
          <section>
            <Star size={20} />
            <span>100</span>
          </section>
          <section>
            <GitPullRequest size={20} />
            <span>100</span>
          </section>
        </div>
        <section className={styles.tech}>
          <Circle size={15} color="#e7de79" weight="fill" />
          <span className={styles.cirle}>Java Script</span>
        </section>
      </footer>
    </div>
  );
}

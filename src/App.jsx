import styles from "./App.module.css";
import { Avatar } from "./components/asideCards/Avatar/Avatar";
import { Education } from "./components/asideCards/Education/Education";
import { Experiences } from "./components/asideCards/Experiences/Experiences";
import { Socials } from "./components/asideCards/Socials/Socials";
import { Technologies } from "./components/asideCards/Technologies/Technologies";
import { Header } from "./components/main/Header/Header";
import { ProjectCard } from "./components/main/ProjectCard/ProjectCard";
import { RecentPost } from "./components/main/RecentPost/RecentPost";

export function App() {
  return (
    <div className={styles.wrapper}>
      <aside className="infoBar">
        <Avatar />
        <Socials />
        <Technologies />
        <Experiences />
        <Education />
      </aside>
      <main>
        <Header />
        <div className={styles.projectCard}>
          <ProjectCard />
          <ProjectCard />
        </div>
        <RecentPost />
      </main>
    </div>
  );
}

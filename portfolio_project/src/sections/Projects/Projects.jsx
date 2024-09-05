import styles from "./ProjectsStyles.module.css";
import calculater from "../../assets/calculator.png";
import goodNews from "../../assets/preview.png";
import job from "../../assets/job.png";
import Design from "../../assets/Design uten navn.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={calculater}
          link="https://github.com/h-hsoon/The_Calculator"
          h3="Calculater"
          p="calculater website"
        />
        <ProjectCard
          src={goodNews}
          link="https://github.com/h-hsoon/ADL1_NewsPaper"
          h3="NewsPaper"
          p="News Paper website"
        />
        <ProjectCard
          src={job}
          link="https://github.com/h-hsoon/Job-Boated-Platform"
          h3="Job Boated"
          p="Job Boated Platform"
        />
        <ProjectCard
          src={Design}
          link="https://github.com/h-hsoon/portfolio"
          h3="Portfolio"
          p="portfolio website"
        />
      </div>
    </section>
  );
}

export default Projects;

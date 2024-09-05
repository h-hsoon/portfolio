import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hsoon.png";
import sun from "../../assets/icons8-sun.svg";
import moon from "../../assets/icons8-moon.svg";
import facebokkLight from "../../assets/icons8-facebook-light.svg";
import facebookDark from "../../assets/icons8-facebook-dark.svg";
import githubLight from "../../assets/icons8-github-light.svg";
import githubDark from "../../assets/icons8-github-dark.svg";
import linkedinLight from "../../assets/icons8-linkedin-light.svg";
import linkedinDark from "../../assets/icons8-linkedin-dark.svg";
import CV from "../../assets/Hanna_Hsoon_CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const facebookIcon = theme === "light" ? facebokkLight : facebookDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Hanna Hsoon"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Hanna
          <br />
          Hsoon
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://www.facebook.com/hanna.hsoon.96" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" />
          </a>
          <a href="https://github.com/h-hsoon" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/hanna-hsoon-9032b82aa/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern Web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

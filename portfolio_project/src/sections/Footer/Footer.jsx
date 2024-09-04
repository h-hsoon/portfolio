import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Hanna Hsoon. Icons by{" "}
        <a href="https://icons8.com" target="_blank">
          Icons8
        </a>{" "}
        <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;

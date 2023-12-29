import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <p className={styles.footerText}>
          <b>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            To-Do App
          </b>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

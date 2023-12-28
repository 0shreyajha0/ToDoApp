import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.containerLeft}>
        <div className={styles.innerContainer}>
          <form className={styles.form}>
            <input
              className={styles.inputTitle}
              autoComplete="off"
              type="text"
              id="todo-title"
              name="todoTitle"
              placeholder="Your Title.."
            />
            <textarea
              className={styles.inputContent}
              id="todo-content"
              name="todoContent"
              placeholder="Write something.."
            ></textarea>
            <input
              className={styles.submitBtn}
              id="submit-btn"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      <div className={styles.containerRight}>
        <img
          className={styles.image}
          src="/images/your_image.jpg"
          alt="Visual representation"
        />
      </div>
    </section>
  );
};

export default HeroSection;

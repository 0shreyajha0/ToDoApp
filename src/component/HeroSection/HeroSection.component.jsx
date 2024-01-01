import React, { useState } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const formSubmitHandler = (formValues) => {
    formValues.preventDefault();
    const title = formValues.target[0].value;
    const content = formValues.target[1].value;
    const newTodo = { title: title, content: content };
    localStorage.setItem("toDo", JSON.stringify(newTodo));
  };

  return (
    <React.Fragment>
      <section className={styles.hero}>
        <div className={styles.containerLeft}>
          <div className={styles.innerContainer}>
            <form className={styles.form} onSubmit={formSubmitHandler}>
              <input
                className={styles.inputTitle}
                autoComplete="off"
                type="text"
                id="todo-title"
                name="title"
                placeholder="Your Title.."
              />
              <textarea
                className={styles.inputContent}
                id="todo-content"
                name="content"
                placeholder="Write something.."
              ></textarea>
              <button
                className={styles.submitBtn}
                id="submit-btn"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;

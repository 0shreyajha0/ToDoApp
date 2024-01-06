import React from "react";
import styles from "./HeroSection.module.css";
import todologo from "../../Assets/images/todologo.png";

let HeroSection = () => {
  let formSubmitHandler = (formValues) => {
    formValues.preventDefault();
    let title = formValues.target[0].value;
    let content = formValues.target[1].value;
    let newTodo = { title: title, content: content };

    let existingTodos = JSON.parse(localStorage.getItem("todos")) || {};
    existingTodos = Array.isArray(existingTodos)
      ? existingTodos
      : [existingTodos];
    existingTodos.push(newTodo);
    console.log(typeof existingTodos);

    localStorage.setItem("todos", JSON.stringify(existingTodos));
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
        <div className={styles.containerRight}>
          <div className={styles.innercontainer}>
            <img
              src={todologo}
              alt="Image for ToDo List"
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;

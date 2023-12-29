import React from "react";
import styles from "./MainSection.module.css";

function MainSection({ todoList }) {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContainer}>
        <div className={styles.todoContainer}>
          <h2 className={styles.todoText}>Your To-Dos</h2>
        </div>
      </div>
    </section>
  );
}

export default MainSection;

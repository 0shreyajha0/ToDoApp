import React, { useState, useEffect } from "react";
import styles from "./MainSection.module.css";

const MainSection = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContainer}>
        <div className={styles.todoContainer}>
          <h2 className={styles.todoText}>Your To-Dos</h2>
          <ul className={styles.todoList}>
            {todos.map((todo, index) => (
              <li key={index}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

import React, { useState, useEffect } from "react";
import styles from "./MainSection.module.css";
import Card from "../Card";

const MainSection = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    storedTodos = Array.isArray(storedTodos) ? storedTodos : [];
    setTodos(storedTodos);
  }, []);

  const todoCards = todos.map((todo, index) => (
    <li key={index} className={styles.card}>
      <Card>
        <div className={styles.cardContent}>
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
        </div>
      </Card>
    </li>
  ));

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContainer}>
        <div className={styles.todoContainer}>
          <h2 className={styles.todoText}>Your To-Dos</h2>
          <ul className={styles.todoList}>{todoCards}</ul>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

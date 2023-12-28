import React from "react";
import styles from "./Header.module.css";
import todologo from "../../Assets/images/todologo.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.logo}>
        <img
          src={todologo}
          alt="Logo for ToDo List"
          className={styles.logoImg}
        />
        <h1>Todo List</h1>
      </div>
      <button className={styles["sync-now"]}>Sync now</button>
    </header>
  );
};

export default Header;

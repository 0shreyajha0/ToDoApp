import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;

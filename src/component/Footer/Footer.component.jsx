import React from "react";
import "./Footer.module.css";

const Footer = () => {
  return (
    <section class="header">
      <div class="container">
        <div class="logo">
          <img
            src="/home/shreya/to-do-app/public/todologo.png"
            alt="ToDo-logo"
            class="logo-img"
          ></img>
          <h1>Todo List</h1>
        </div>
        <nav>
          <ul>
            <button id="sync-now-btn" class="sync-now">
              <p id="sync-now-p">
                Sync now <i id="sync-spinner" class=""></i>
              </p>
            </button>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Footer;

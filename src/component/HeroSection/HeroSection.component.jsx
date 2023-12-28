import React from "react";
import "./HeroSection.module.css";

const Herosection = () => {
  return (
    <section class="new-todo">
      <h1>Add your task here</h1>
      <div class="new-todo-hoc">
        <div class="container">
          <form class="todo-form">
            <input
              class="todo-title"
              autocomplete="off"
              type="text"
              id="todo-title"
              name="todoTitle"
              placeholder="Your Title.."
            />
            <textarea
              class="todo-content"
              id="todo-content"
              name="todoContent"
              placeholder="Write something.."
            ></textarea>
            <input
              class="submit-btn"
              id="submit-btn"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <img
          class="new-todo-img"
          src="/images/undraw_online_organizer_ofxm.svg"
          alt="Add new todo section"
        />
      </div>
    </section>
  );
};
export default HeroSection;

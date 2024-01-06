import React, { useState } from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import MainSection from "./component/MainSection";
import Footer from "./component/Footer";

let App = () => {
  let [todos, setTodos] = useState([]);

  let addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Header />
      <HeroSection addTodo={addTodo} />
      <MainSection todos={todos} />
      <Footer />
    </div>
  );
};

export default App;

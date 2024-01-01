import React, { useState } from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import MainSection from "./component/MainSection";
import Footer from "./component/Footer";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
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

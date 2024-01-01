import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import Footer from "./Footer";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <Header />
      <HeroSection addTodo={addTodo} />
      <MainSection todos={todos} />
      <Footer />
    </div>
  );
};

export default App;

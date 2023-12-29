import React, { useState } from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import MainSection from "./component/MainSection";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;

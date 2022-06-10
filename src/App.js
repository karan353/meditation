import React, { useState } from "react";
import Menu from "./components/Menu";

import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import BoxBreathing from "./pages/BoxBreathing";

function App() {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <section className={isActive ? "showcase" : "showcase active"}>
        <header>
          <h2 className="logo">Meditation</h2>
          <div
            className={isActive ? "toggle" : "toggle active"}
            onClick={ToggleClass}
          ></div>
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="boxbreathing" element={<BoxBreathing />} />
        </Routes>
      </section>
      <Menu />
    </>
  );
}

export default App;

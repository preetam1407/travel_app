import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ModeChoice from "./pages/ModeChoice";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the Home component to render when the root URL is accessed */}
        <Route exact path="/" element={<Home/>}/> 
        {/* Define the ModeChoice component to render when "/mode-choice" is accessed */}
        <Route exact path="/mode-choice" element={<ModeChoice/>} />
      </Routes>
    </Router>
  );
};

export default App;

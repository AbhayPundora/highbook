import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Main collection={false} />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDarkMode } from "./contexts/AppThemeProvider";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      {/* <div className="text-red-500">
        <p className="">My name is Joonas</p>
      </div> */}
      <Header />
      <div className="container mx-auto" />
      <Footer />
      <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
    </>
  );
}

export default App;

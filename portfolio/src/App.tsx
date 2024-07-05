import React from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDarkMode } from "./contexts/AppThemeProvider";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const themeStyles = {
    light: {
      background: "bg-gradient-to-r from-blue-100 to-teal-100",
      text: "text-gray-800"
    },
    dark: {
      background: "bg-gradient-to-r from-gray-900 to-blue-900",
      text: "text-gray-100"
    }
  };

  const currentTheme = darkMode ? themeStyles.dark : themeStyles.light;

  return (
    <div className={`min-h-screen flex flex-col ${currentTheme.background}`}>
      <Header />
      <main className={`container mx-auto flex-grow my-16 p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <p className={`text-xl font-semibold ${currentTheme.text}`}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </p>
        {/* Add your main content here */}
      </main>
      <Footer year="2024" />
    </div>
  );
}

export default App;
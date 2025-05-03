import React, { useEffect, useState } from "react";
import CryptoList from "./components/CryptoList";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 dark:text-white transition-all">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">CryptoTrack</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-blue-600 text-white"
        >
          {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
        </button>
      </header>
      <CryptoList />
    </div>
  );
}

export default App;
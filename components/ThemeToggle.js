// components/ThemeToggle.js
import { useState, useEffect } from 'react';
import { FiSun} from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedMode === 'dark' || (!savedMode && prefersDark);
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  

  const toggleTheme = () => {
    const newMode = isDarkMode ? 'light' : 'dark'; // Flip this
    setIsDarkMode(!isDarkMode); // Update state
    localStorage.setItem('theme', newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
  };  

  return (
    <button onClick={toggleTheme} className=" text-4xl lg:text-6xl text-black dark:text-white rounded-md">
      {isDarkMode ?  <FiSun /> : <LuMoon />}
    </button>
  );
};

export default ThemeToggle;

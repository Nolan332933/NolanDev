// components/ThemeToggle.js
import { useState, useEffect } from 'react';
import { FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // If there's a saved mode in localStorage, use it, otherwise use system preference
    const isDark = savedMode === 'dark' || (!savedMode && prefersDark);
    setIsDarkMode(isDark);
    
    // Toggle 'dark' class on the HTML element based on the chosen theme
    document.documentElement.classList.toggle('dark', isDark);
    
    // Update localStorage if no previous theme is set
    if (!savedMode) {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const newSystemPrefersDark = e.matches;
      setIsDarkMode(newSystemPrefersDark);
      document.documentElement.classList.toggle('dark', newSystemPrefersDark);
      localStorage.setItem('theme', newSystemPrefersDark ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newMode = isDarkMode ? 'light' : 'dark'; // Flip the mode
    setIsDarkMode(!isDarkMode); // Update the state
    localStorage.setItem('theme', newMode); // Save the preference to localStorage
    document.documentElement.classList.toggle('dark', newMode === 'dark'); // Update the DOM
  };

  return (
    <button onClick={toggleTheme} className="text-4xl lg:text-6xl text-black dark:text-white rounded-md">
      {isDarkMode ? <FiSun /> : <LuMoon />}
    </button>
  );
};

export default ThemeToggle;

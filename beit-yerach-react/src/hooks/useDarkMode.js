import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode) {
      const isDark = JSON.parse(savedMode);
      setIsDarkMode(isDark);
      applyDarkMode(isDark);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      applyDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      applyDarkMode(newMode);
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return { isDarkMode, toggleDarkMode };
}

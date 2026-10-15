import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Theme can be 'system', 'dark', or 'light'
  const [themeMode, setThemeMode] = useState(() => {
    try {
      return localStorage.getItem('regal_theme_preference') || 'system';
    } catch {
      return 'system';
    }
  });

  // Actual applied theme ('dark' or 'light')
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('regal_theme_preference');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    // Default to device / system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme changes to document.documentElement
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateResolvedTheme = () => {
      let activeIsDark = false;
      if (themeMode === 'system') {
        activeIsDark = mediaQuery.matches;
      } else {
        activeIsDark = themeMode === 'dark';
      }

      setIsDark(activeIsDark);

      const root = document.documentElement;
      if (activeIsDark) {
        root.classList.add('dark');
        root.classList.remove('light');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        root.style.colorScheme = 'light';
      }
    };

    updateResolvedTheme();

    // Listen for device OS preference changes in real-time
    const handleSystemChange = (e) => {
      if (themeMode === 'system') {
        updateResolvedTheme();
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemChange);
      return () => mediaQuery.removeListener(handleSystemChange);
    }
  }, [themeMode]);

  const setTheme = (mode) => {
    setThemeMode(mode);
    try {
      localStorage.setItem('regal_theme_preference', mode);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleTheme = () => {
    if (themeMode === 'system') {
      // Toggle to the opposite of current resolved mode
      setTheme(isDark ? 'light' : 'dark');
    } else if (themeMode === 'dark') {
      setTheme('light');
    } else {
      setTheme('system'); // Cycles Light -> System -> Dark
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode, isDark, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

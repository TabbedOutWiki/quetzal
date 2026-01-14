// Theme globals
const THEME_KEY = 'theme'
const THEME = Object.freeze({
  DEFAULT: 'theme-system',
  LIGHT: 'theme-light',
  DARK: 'theme-dark'
});

// Detect and set theme, set invalid themes to default
(function () {
  try {
    const storedTheme = localStorage.getItem(THEME_KEY) || THEME.DEFAULT;
    if (Object.values(THEME).includes(storedTheme)) {
      document.documentElement.className = storedTheme;
    } else {
      document.documentElement.className = THEME.DEFAULT;
      localStorage.setItem(THEME_KEY, THEME.DEFAULT);
    }
  } catch(_) {}
})();
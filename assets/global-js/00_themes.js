(function() {
  const select = document.querySelector('select#theme-switcher.menu');

  // Check if global theme enum contains theme
  const isValidTheme = (_theme) => {
    if (Object.values(THEME).includes(_theme)) return true;
    return false;
  }

  // On select change, match and set theme
  const handleChange = () => {
    const selectedOption = select.options[select.selectedIndex];
    const theme = selectedOption.value;

    if (isValidTheme(theme)) {
      document.documentElement.className = theme;
      localStorage.setItem(THEME_KEY, theme);
    }
  }

  // Detect theme and match select menu to it
  const detectedTheme = localStorage.getItem(THEME_KEY) || THEME.DEFAULT;
  if (isValidTheme(detectedTheme)) {
    for (const option of select.options) {
      if (option.value === detectedTheme) option.selected = true;
    }
  }
  
  select.addEventListener('change', handleChange);
})();
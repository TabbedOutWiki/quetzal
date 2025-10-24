(function() {
  // Load pagefind
  new PagefindUI({ element: '#PageFindSearch', showSubResults: false });

  // Add search hotkey: "/"
  const search = document.querySelector('.pagefind-ui__search-input');

  const handleKey = (e) => {
    if (e.key === '/' && document.activeElement === document.body) {
      e.preventDefault();
      search.focus();
    }
  }
  document.addEventListener('keydown', handleKey);
})();
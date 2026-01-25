(function() {
  const copyHashlessURL = () => {
    try {
      const hashlessURL = 'https://' + window.location.hostname + window.location.pathname;
      navigator.clipboard.writeText(hashlessURL);
    } catch (err) {
      console.error('Failed to copy the current URL to clipboard');
    }
  }

  const shareURLButton = document.getElementById('ShareArticleButton');
  if (shareURLButton) {
    shareURLButton.addEventListener('click', copyHashlessURL);
  }
})();

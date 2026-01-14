// This js should be conditionally rendered and is not currently
(function() {
  const tabs = document.querySelectorAll('.tabs');
  for (const tab of tabs) {
    const tabContainer = tab.querySelector('.tabs-container');
    const tabControls = tabContainer.querySelectorAll('button.tab-control');
    const panels = tab.querySelectorAll('[data-panel]');

    for (const tabControl of tabControls) {
      const handleClick = (e) => {
        e.stopPropagation();
        const panelID = e.target.dataset.controls;

        for (const panel of panels) {
          if (panel.dataset.panel === panelID) {
            panel.classList.remove('is-hidden');

            // Accessibility
            for (const btn of tabControls) {
              if (btn.id === e.target.id) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                btn.removeAttribute('tabindex');
              } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
                btn.setAttribute('tabindex', '-1');
              }
            }
          } else {
            panel.classList.add('is-hidden');
          }
        }
      }

      tabControl.addEventListener('click', handleClick);
    }
  }
})();
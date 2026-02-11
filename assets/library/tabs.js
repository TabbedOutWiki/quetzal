(function() {
  const tabGroups = document.querySelectorAll('.tab-group');

  const showPanel = (panel) => {
    panel.classList.remove('is-hidden');
  }

  const hidePanel = (panel) => {
    panel.classList.add('is-hidden');
  }

  const activateButton = (button) => {
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    button.removeAttribute('tabindex');
  }

  const deactivateButton = (button) => {
    button.classList.remove('active');
    button.setAttribute('aria-selected', 'false');
    button.setAttribute('tabindex', '-1');
  }

  const handleClick = (e) => {
    e.preventDefault();

    const clickedButton = e.target;

    // Deactivate currently active buttons and panels matching their data-controls attribute
    const clickedGroup = clickedButton.closest('.tab-group');
    const currentActiveButtons = clickedGroup.querySelectorAll('.tab-button.active');
    for (const button of currentActiveButtons) {
      const panelID = button.dataset.controls;
      const matchedPanels = document.querySelectorAll(`[data-panel="${panelID}"]`);
      for (const panel of matchedPanels) {
        hidePanel(panel);
      }

      deactivateButton(button);
    }

    // Activate selected button and display matching panel
    const matchedID = clickedButton.dataset.controls;
    const matchedPanels = document.querySelectorAll(`[data-panel=${matchedID}].is-hidden`);
    for (const panel of matchedPanels) {
      showPanel(panel);
    }
    activateButton(clickedButton);
  }

  for (const group of tabGroups) {
    const buttons = group.querySelectorAll('.tab-button');
    for (const button of buttons) {
      button.addEventListener('click', handleClick);
    }
  }
})();

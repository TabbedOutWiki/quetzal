(function() {
  const tooltips = document.querySelectorAll('.tooltip');
  if (tooltips.length === 0) return;

  const handleMouseEnter = (e) => {
    const tooltip = e.currentTarget;
    const display = tooltip.querySelector('.tooltip-display');
    if (!display) return;

    const displayRect = display.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    if (displayRect.width > viewportWidth) return;

    const hoverRect = tooltip.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Default position
    let position = { top: 0, left: 0 }

    // Available space around the tooltip
    const spaceAbove = hoverRect.top;
    const spaceBelow = viewportHeight - hoverRect.bottom;
    const spaceLeft = hoverRect.left;
    const spaceRight = viewportWidth - hoverRect.right;

    // Above -> below -> right -> left
    if (spaceAbove >= displayRect.height) {
      position.top = hoverRect.top - displayRect.height;
      position.left = hoverRect.left + (hoverRect.width / 2) - (displayRect.width / 2);
    } else if (spaceBelow >= displayRect.height) {
      position.top = hoverRect.bottom;
      position.left = hoverRect.left + (hoverRect.width / 2) - (displayRect.width / 2);
    } else {
      if (spaceRight >= displayRect.width) {
        position.left = hoverRect.right;
      } else if (spaceLeft >= displayRect.width) {
        position.left = hoverRect.left - displayRect.width;
      } else {
        return;
      }
      position.top = hoverRect.top + (hoverRect.height / 2) - (displayRect.height / 2);
    }

    // Clamp horizontally
    if (position.left < 0) {
      position.left = 0;
    } else if (position.left + displayRect.width > viewportWidth) {
      position.left = viewportWidth - displayRect.width;
    }

    // Clamp vertically
    if (position.top < 0) {
      position.top = 0;
    } else if (position.top + displayRect.height > viewportHeight) {
      position.top = viewportHeight - displayRect.height;
    }

    // Set position and visibility
    display.style.top = `${position.top}px`;
    display.style.left = `${position.left}px`;
    display.classList.add('visible');
  };

  const handleMouseLeave = (e) => {
    const tooltip = e.currentTarget;
    const display = tooltip.querySelector('.tooltip-display');
    if (display) {
      display.classList.remove('visible');
    }
  };

  for (const tooltip of tooltips) {
    tooltip.addEventListener('mouseenter', handleMouseEnter);
    tooltip.addEventListener('mouseleave', handleMouseLeave);
  }
})();
(function() {
  const menus = document.querySelectorAll('.menu');

  const toggleMenu = (e) => {
    const menu = e.target.closest('.menu');
    const toggle = menu.querySelector('.menu-toggle');
    if (toggle.style.display === "none") {
      toggle.style.display = "block";
    } else {
      toggle.style.display = "none";
    }
  }

  for (const menu of menus) {
    menu.addEventListener('click', toggleMenu);
  }
})();
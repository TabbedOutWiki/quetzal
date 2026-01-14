// Make it work with focus instead of .selected class probably
window.addEventListener('DOMContentLoaded', (e) => {
  const searchContainer = document.querySelector('div.pagefind-container');
  const searchForm = document.querySelector('form.pagefind-form');
  const inputField = document.querySelector('input#PageFindInput');
  const openButton = document.querySelector('button#SearchButtonOpen');
  const closeButton = document.querySelector('button#SearchButtonClose');
  const resultsList = document.querySelector('ul.pagefind-results');

  // Initialize Pagefind
  const instance = new PagefindModularUI.Instance();

  instance.add(new PagefindModularUI.Input({
    inputElement: "#PageFindInput",
  }));

  instance.add(new PagefindModularUI.ResultList({
    containerElement: "#PageFindResults",
    showImages: false,
    placeholderTemplate: () => {
      return '<li class="pagefind-result"><h2 class="pagefind-result-title">...</h2><p class="pagefind-result-excerpt">...</p></li>';
    },
    resultTemplate: (result) => {
      // Don't render the current page result
      if (result.url === window.location.href) return;

      // Build list item and return
      const listWrapper = document.createElement("li");
      listWrapper.classList.add("pagefind-result");

      const linkWrapper = document.createElement("a");
      linkWrapper.classList.add("pagefind-result-link");
      linkWrapper.href = result.url;

      const titleElement = document.createElement("h2");
      titleElement.classList.add("pagefind-result-title");
      titleElement.innerText = result.meta.title;

      const excerptElement = document.createElement("p");
      excerptElement.classList.add("pagefind-result-excerpt");
      excerptElement.innerHTML = result.excerpt;

      linkWrapper.appendChild(titleElement);
      linkWrapper.appendChild(excerptElement);
      listWrapper.appendChild(linkWrapper);
      return listWrapper;
    },
  }));

  // Navigation
  let selectedIndex = -1;
  const handleSelectReset = () => {
    const selected = resultsList.querySelector('li.pagefind-result.selected');
    if (selected) {
      selected.classList.remove('selected');
    }

    selectedIndex = -1;
  }

  const handleArrowUp = () => {
    const results = resultsList.querySelectorAll('li.pagefind-result');
    const selected = resultsList.querySelector('li.pagefind-result.selected');

    if (selected) {
      selected.classList.remove('selected');
    }

    if (selectedIndex <= 0) {
      selectedIndex = results.length - 1;
    } else {
      selectedIndex--;
    }

    results[selectedIndex].classList.add('selected');
    results[selectedIndex].scrollIntoViewIfNeeded(false);
  }

  const handleArrowDown = () => {
    const results = resultsList.querySelectorAll('li.pagefind-result');
    const selected = resultsList.querySelector('li.pagefind-result.selected');

    if (selected) {
      selected.classList.remove('selected');
    }

    if (selectedIndex >= results.length - 1) {
      selectedIndex = 0;
    } else {
      selectedIndex++;
    }

    results[selectedIndex].classList.add('selected');
    results[selectedIndex].scrollIntoViewIfNeeded(false);
  }

  const handleSelect = () => {
    const selectedResult = resultsList.querySelector("li.pagefind-result.selected");
    if (selectedResult) {
      const link = selectedResult.querySelector("a.pagefind-result-link");
      link.click();
    }
  }

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        handleArrowUp();
        break;
      case "ArrowDown":
        e.preventDefault();
        handleArrowDown();
        break;
      case "Enter":
        // Preventing default breaks tab index here
        handleSelect();
        break;
    }
  }

  // Focus search when pressing / anywhere
  const handleSearchFocus = (e) => {
    if (e.key === '/' && document.activeElement === document.body) {
      e.preventDefault();
      inputField.focus();
    }
  }

  // Mobile toggle
  const handleSearchOpen = () => {
    searchContainer.classList.add('open');
    document.body.classList.add('noscroll');
  }

  const handleSearchClose = () => {
    searchContainer.classList.remove('open');
    document.body.classList.remove('noscroll');
  }

  // Event listeners
  document.addEventListener('keydown', handleSearchFocus);
  openButton.addEventListener('click', handleSearchOpen);
  closeButton.addEventListener('click', handleSearchClose);

  searchForm.addEventListener('keydown', handleKeyDown);
  inputField.addEventListener('change', handleSelectReset);
  inputField.addEventListener('focusout', handleSelectReset);
});
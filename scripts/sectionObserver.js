// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top + 50 <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0 &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var sections = document.querySelectorAll("section");

  // Loop through each section and check if it's in the viewport
  sections.forEach(function (section) {
    if (isElementInViewport(section)) {
      // Get the id of the section
      var sectionId = section.getAttribute("id");

      // Update the URL with the section id as the anchor
      if (sectionId) history.replaceState(null, null, "#" + sectionId);
    }
  });
}

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Add scroll event listener to window
window.addEventListener("scroll", debounce(handleScroll, 100));

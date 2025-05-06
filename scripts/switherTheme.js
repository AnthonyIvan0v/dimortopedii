const page = document.querySelector(".page");
const swither = document.querySelector(".theme-switcher");

if (swither) {
  swither.addEventListener("click", () => {
    if (page.classList.contains("page--theme--dark")) {
      page.classList.remove("page--theme--dark");
      swither.classList.remove("theme-switcher--theme--dark");
    } else {
      page.classList.add("page--theme--dark");
      swither.classList.add("theme-switcher--theme--dark");
    }
  });
}

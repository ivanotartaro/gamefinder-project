const bigCard = function () {
  document
    .querySelectorAll(".big-card")
    .forEach((game, index) => game.classList.remove("hidden"));
  document
    .querySelectorAll(".small-card")
    .forEach((game, index) => game.classList.add("hidden"));

  document.querySelector(".container");
  container.classList.remove("small-card-grid");
  container.classList.add("big-card-grid");

  document
    .querySelector(".big-card-view")
    .setAttribute("src", "../assets/functionality/gallery-active.svg");
  document
    .querySelector(".small-card-view")
    .setAttribute("src", "../assets/functionality/thumbnails-disabled.svg");

  modoSmall = false;
};

const smallCard = function () {
  document
    .querySelectorAll(".big-card")
    .forEach((game, index) => game.classList.add("hidden"));
  document
    .querySelectorAll(".small-card")
    .forEach((game, index) => game.classList.remove("hidden"));

  document.querySelector(".container");

  container.classList.remove("big-card-grid");
  container.classList.add("small-card-grid");

  document
    .querySelector(".big-card-view")
    .setAttribute("src", "../assets/functionality/gallery-disabled.svg");
  document
    .querySelector(".small-card-view")
    .setAttribute("src", "../assets/functionality/thumbnails-active.svg");

  modoSmall = true;
};

document.querySelector(".big-card-view").addEventListener("click", bigCard);

document.querySelector(".small-card-view").addEventListener("click", smallCard);


//LIGHT MODE


const lightMode = function () {
  document.querySelector(".main-page").classList.toggle("main-page-light");
  document.querySelector(".sub-menu").classList.toggle("main-page-light");
  document.querySelector(".nav-menu").classList.toggle("main-page-light");
  document.querySelector(".container").classList.toggle("main-page-light");
  document.querySelectorAll(".title-txt").forEach((txt, index) => txt.classList.toggle("main-page-light"));
  document.querySelectorAll(".normal-txt").forEach((txt, index) => txt.classList.toggle("main-page-light"));

  darkMode = false;
};

document.querySelector(".switch").addEventListener("click", lightMode);
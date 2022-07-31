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
  document
    .querySelectorAll(".title-txt")
    .forEach((txt, index) => txt.classList.toggle("main-page-light"));
  document
    .querySelectorAll(".normal-txt")
    .forEach((txt, index) => txt.classList.toggle("main-page-light"));

  document.querySelector(".hamburger-menu").classList.toggle("main-page-light");
  document
    .querySelector(".close-hamburger")
    .classList.toggle("platform-container-light");

  // SMALL CARD

  document
    .querySelectorAll(".small-card")
    .forEach((sml, index) => sml.classList.toggle("card-light"));

  document
    .querySelectorAll(".platform-container")
    .forEach((cnl, index) => cnl.classList.toggle("platform-container-light"));

  // BIG CARD
  document
    .querySelectorAll(".big-card")
    .forEach((bigc, index) => bigc.classList.toggle("card-light"));

  document
    .querySelectorAll(".big-platform-container")
    .forEach((cnl, index) => cnl.classList.toggle("platform-container-light"));

  document
    .querySelectorAll(".switch")
    .forEach((elem, idx) => elem.classList.toggle("switch-hidden"));

  darkMode = false;
};

document.querySelector(".switch").addEventListener("click", lightMode);
document.querySelector("#switch-off").addEventListener("click", lightMode);

/* HAMBURGER MENU */

const hamburgerMenu = function () {
  document.querySelector(".hamburger-menu").classList.remove("hidden");
};

document.querySelector(".hamburger").addEventListener("click", hamburgerMenu);

const closeHamburgerMenu = function () {
  document.querySelector(".hamburger-menu").classList.add("hidden");
};

document
  .querySelector(".close-hamburger")
  .addEventListener("click", closeHamburgerMenu);

/* SEARCH DISPLAY IN MOBILE */

const searchMobile = function () {
  //document.querySelector(".search-bar").style.display = "flex";
  let classListSearchBar = document.querySelector(".search-bar").classList;
  classListSearchBar.toggle("mobile-visible");

  if (!classListSearchBar.contains("mobile-visible")) {
    document.querySelector("input[name=search-filter]").value = "";
    document.querySelector(".search-results").innerHTML = "";
    document.querySelector(".search-results").style.display = "none";
  } else {
    document.querySelector("input[name=search-filter]").focus();
  }
};

document
  .querySelector(".search-icon-mobile")
  .addEventListener("click", searchMobile);

/*const closeSearchMobile = function () {
  //document.querySelector(".search-bar").style.display = "none";
  document.querySelector(".search-bar").classList.remove('mobile-visible');
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeSearchMobile();
});*/

/* document
  .querySelector(".search-icon-mobile")
  .addEventListener("click", closeSearchMobile); */

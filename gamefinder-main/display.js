const bigCard = function () {
  document
    .querySelectorAll(".big-card")
    .forEach((game, index) => game.classList.remove("hidden"));
  document
    .querySelectorAll(".small-card")
    .forEach((game, index) => game.classList.add("hidden"));

  document.querySelector(".container");
  container.style.removeProperty("grid-template-columns");
  container.style.gridTemplateColumns = "repeat(1, 1fr)";
  container.style.marginRight = "auto";

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
  container.style.removeProperty("grid-template-columns");
  container.style.gridTemplateColumns = "repeat(3, 1fr)";
  container.style.marginRight = "2rem";

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

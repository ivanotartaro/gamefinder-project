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
};

document.querySelector(".big-card-view").addEventListener("click", bigCard);

document.querySelector(".small-card-view").addEventListener("click", smallCard);

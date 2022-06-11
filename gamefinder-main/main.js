let pagina = 1;

const key = 'a9529065ada646aa8aead9848ff6613f';
const urlBaseGames = 'https://api.rawg.io/api/games?key=' + key + '&page=$page&page_size=$page_size';
const pageSize = 20;
let container;

window.onload = function(){
    container = document.getElementById("container");

    appendNewGames(getGames(pagina++, pageSize));
};

window.addEventListener('scroll',() => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if (scrollTop + clientHeight > scrollHeight - 5){
        setTimeout(() => appendNewGames(getGames(pagina++, pageSize)),1000);
    }
});

function getGames(page, size) {
    return fetch(urlBaseGames.replace('$page', page).replace('$page_size', size))
        .then(response => response.json().then(data => data.results));
}

function appendNewGames(promiseGames) {
    promiseGames.then(games => {
        games.forEach(game => {
            container.innerHTML += getHtmlRenderedGameCard(game);
        });
    });
}

function getHtmlRenderedGameCard(game){
    return "<div class=\"small-card\">" +
        "               <div class=\"small-card-image\">" +
        "                   <img alt=\"Imagen del juego\" src=\"" + game.background_image + "\">" +
        "               </div>" +
        "               <div class=\"small-card-info\">" +
        "                   <div class=\"small-card-info-title\"></div>" +
        "                   <div class=\"small-card-info-miscellaneous\"></div>" +
        "               </div>" +
        "          </div>";
}

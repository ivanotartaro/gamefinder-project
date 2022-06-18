/* ************** VALIDATION ***************** */

const regexpMail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
let showPassword = false;

window.onload = function(){
    const form = document.getElementById('form');                                               //agarro todo el nodo de form
    form.addEventListener('submit', processSubmit);                                                 //referencia, vas a invocar ese metodo, referencias a metodos -- la arrow hace lo mismo pero en la misma linea
                                                                                                                //seteo listener
    document.getElementsByName("mail")[0].addEventListener('keyup', () => {                             //cuando teclea empieza a ejecutar la funcion
        const mail = document.getElementsByName("mail")[0].value;                               //agarro valor en mail

        if (mail) {                                                                                                 //mientras haya algo, trueish, si teclea algo, es un mail??
            if (!mail.match(regexpMail)) {
                document.getElementById("email-wrapper").setAttribute("style", "border: 2px solid red;");
            } else {
                document.getElementById("email-wrapper").setAttribute("style", "border: 2px solid green;");
            }
        } else {
            document.getElementById("email-wrapper").removeAttribute("style");
        }
    });

    document.getElementById("see-password").addEventListener('click', () => {               //evento, click, que pasa cuando ocurre el click, arranca oculta seteado arriba
        const fieldPassword = document.getElementsByName("password")[0];                    //agarra todo el nodo input de pass
        const seePasswordImg = document.getElementById("see-password");

        if (showPassword) {
            fieldPassword.setAttribute("type", "password");
            seePasswordImg.setAttribute("src", "../assets/img/see-password.svg");
        } else {
            fieldPassword.setAttribute("type", "text");                                         // cambia el type a texto para ver pass
            seePasswordImg.setAttribute("src", "../assets/img/hide-password.svg");
        }

        showPassword = !showPassword;                                                           //showing pass le pone un contrario al valor true de la variable
    });
};

function processSubmit(event) {
    event.preventDefault();


}


/* ************** CARROUSEL ***************** */


const ACTION_NEXT_BACKGROUND = 'NEXT';
const ACTION_PREVIOUS_BACKGROUND = 'PREVIOUS';
let currentBackgroundIndex = 0;                                                         //que imagen arranca primero
let backgrounds;                                                                        //agarra nodos los lets
let paginationDots;                                                                    //settea variables que necesita carru
let numberOfBackgrounds;

document.addEventListener("DOMContentLoaded", function(){                               //cuando carga el dom arranca el js
    backgrounds = document.querySelectorAll(".background");                             //dame todos los elementos del doc que tengan la classe background
    paginationDots = document.querySelectorAll(".pagination-dot");                      //same
    numberOfBackgrounds = backgrounds.length;                                           //cuantos elementos son en total

    backgrounds.forEach((bg, index) => {                                                //por cada elemento del arreglo hace algo (elemento e indice) por cada elemento del array hago algo //paso por cada div background 1 div indice 0 ... 5 - 4
        bg.style.transform = `translateX(${index * 100}%)`;                            // agarrando cada div, y le transforma el estilo. la transformacion es pasar la imagen sobre el eje de las x y depsues agarra su indice y lo multiplica por 100% y va moviendo las imagenes a su lugar correspondiente
    });

    paginationDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            changeBackgroudWithIndex(index);
        });
    });

    document.getElementById("btn-next").addEventListener("click", () => {
        changeBackgroundWithArrow(ACTION_NEXT_BACKGROUND);
    });

    document.getElementById("btn-previous").addEventListener("click", () => {
        changeBackgroundWithArrow(ACTION_PREVIOUS_BACKGROUND);
    });
});

function changeBackgroundWithArrow(action) {
    currentBackgroundIndex = getChangedBackgroundIndex(action);                         //si sumo 1 y estoy dentro de la cantidad de background sumale 1, si llegue al 4, mandalo a 0 --decime en que fondo estoy
                                                                                        //estoy parado aca, decime en cual voy a estar si apreto adelante o atras
    repaintPaginationDots(currentBackgroundIndex);                                      //pinta el boton orrespondiente al index

    backgrounds.forEach((bg, index) => {
        bg.style.transform = `translateX(${(index - currentBackgroundIndex) * 100}%)`; // traslada los fondos para el lado conrtrario al que moviste (1-1) 0  !!!!!!
    });
}

function changeBackgroudWithIndex(indexSelected) {
    currentBackgroundIndex = indexSelected;

    repaintPaginationDots(indexSelected);

    backgrounds.forEach((bg, index) => {
        bg.style.transform = `translateX(${(index - currentBackgroundIndex) * 100}%)`;      //ccambia con el dot, hace lo mismo que arriba
    });
}

function repaintPaginationDots(currentIndex) {                                      //saca el active a todos los puntos y le pone al que tiene el index= a la pagina que quiero ir
    paginationDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function getChangedBackgroundIndex(action) {
    if (action === ACTION_NEXT_BACKGROUND) {                                                                            //si sumo 1 y estoy dentro de la cantidad de background sumale 1, si llegue al 4, mandalo a 0 --decime en que fondo estoy
        return (currentBackgroundIndex + 1) === numberOfBackgrounds ? 0 : currentBackgroundIndex + 1;
    } else if (action === ACTION_PREVIOUS_BACKGROUND) {
        return (currentBackgroundIndex - 1) === -1? numberOfBackgrounds-1 : currentBackgroundIndex - 1
    }

    return currentBackgroundIndex;
}


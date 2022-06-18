/* ************** VALIDATION ***************** */

const regexpMail = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
let showPassword = false;

window.onload = function(){
    const form = document.getElementById('form');                                               
    form.addEventListener('submit', processSubmit);                                                 
                                                                                                                
    document.getElementsByName("mail")[0].addEventListener('keyup', () => {                           
        const mail = document.getElementsByName("mail")[0].value;                              

        if (mail) {                                                                                                
            if (!mail.match(regexpMail)) {
                document.getElementById("email-wrapper").setAttribute("style", "border: 2px solid red;");
            } else {
                document.getElementById("email-wrapper").setAttribute("style", "border: 2px solid green;");
            }
        } else {
            document.getElementById("email-wrapper").removeAttribute("style");
        }
    });

    document.getElementById("see-password").addEventListener('click', () => {               
        const fieldPassword = document.getElementsByName("password")[0];                   
        const seePasswordImg = document.getElementById("see-password");

        if (showPassword) {
            fieldPassword.setAttribute("type", "password");
            seePasswordImg.setAttribute("src", "../assets/img/see-password.svg");
        } else {
            fieldPassword.setAttribute("type", "text");                                         
            seePasswordImg.setAttribute("src", "../assets/img/hide-password.svg");
        }

        showPassword = !showPassword;                                                         
    });
};


/////////////////  LOGIN ///////////////////////////////////

function processSubmit(event) {
    event.preventDefault();

    const user = document.querySelector("input[name=mail]").value;
    const pass = document.querySelector("input[name=password]").value;

    let loginSuccessfull = login(user, pass);
}

function login(user, pass) {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: user, password: pass})
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res);
        }
        return res.json()
    })
    .then(res => {
        window.localStorage.setItem('accessToken', res.accessToken);
        window.location.href = '../gamefinder-main/main.html';
    }).catch(error => {
        alert("Wrong password!") //TO DO
            
    });

}


/* ************** CARROUSEL ***************** */


const ACTION_NEXT_BACKGROUND = 'NEXT';
const ACTION_PREVIOUS_BACKGROUND = 'PREVIOUS';
let currentBackgroundIndex = 0;                                                         
let backgrounds;                                                                        
let paginationDots;                                                                    
let numberOfBackgrounds;

document.addEventListener("DOMContentLoaded", function(){                               
    backgrounds = document.querySelectorAll(".background");                            
    paginationDots = document.querySelectorAll(".pagination-dot");                    
    numberOfBackgrounds = backgrounds.length;                                        

    backgrounds.forEach((bg, index) => {                                             
        bg.style.transform = `translateX(${index * 100}%)`;                           
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
    currentBackgroundIndex = getChangedBackgroundIndex(action);                         
                                                                                       
    repaintPaginationDots(currentBackgroundIndex);                                     

    backgrounds.forEach((bg, index) => {
        bg.style.transform = `translateX(${(index - currentBackgroundIndex) * 100}%)`; 
    });
}

function changeBackgroudWithIndex(indexSelected) {
    currentBackgroundIndex = indexSelected;

    repaintPaginationDots(indexSelected);

    backgrounds.forEach((bg, index) => {
        bg.style.transform = `translateX(${(index - currentBackgroundIndex) * 100}%)`;    
    });
}

function repaintPaginationDots(currentIndex) {                                     
    paginationDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function getChangedBackgroundIndex(action) {
    if (action === ACTION_NEXT_BACKGROUND) {                                                                            
        return (currentBackgroundIndex + 1) === numberOfBackgrounds ? 0 : currentBackgroundIndex + 1;
    } else if (action === ACTION_PREVIOUS_BACKGROUND) {
        return (currentBackgroundIndex - 1) === -1? numberOfBackgrounds-1 : currentBackgroundIndex - 1
    }

    return currentBackgroundIndex;
}


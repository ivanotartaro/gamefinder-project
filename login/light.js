const lightMode = function () {
    document.querySelector(".login-container").classList.toggle("login-page-light");
    

    darkMode = false;
  };
  
  document.querySelector(".switch").addEventListener("click", lightMode);
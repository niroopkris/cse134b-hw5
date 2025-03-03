document.addEventListener("DOMContentLoaded", function() {
   const themeButton = document.querySelector("[data-theme-toggle]");

    const localStorageTheme = localStorage.getItem("theme");


    let curTheme = localStorageTheme || "light";

    document.querySelector("html").setAttribute("data-theme", curTheme);
        
    themeButton.addEventListener("click", (event) => {
        if (curTheme === "light") {
            curTheme = "dark";
        }
        else {
            curTheme = "light";
        }
    
        localStorage.setItem("theme", curTheme);
        document.querySelector("html").setAttribute("data-theme", curTheme);
    }); 
});
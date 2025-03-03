const themeButton = document.querySelector("[data-theme-toggle]");

const localStorageTheme = localStorage.getItem("theme");

let curTheme = localStorageTheme;

if (localStorageTheme !== null) {
    let curTheme = localStorageTheme;
    }
else {
    let curTheme = "light";
}

document.querySelector("html").setAttribute("data-theme", curTheme);
    
themeButton.addEventListener("click", (event) => {
    if (curTheme == "dark") {
        const newTheme = "light";
    }
    else {
        const newTheme = "dark";
    }
  
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);

    curTheme = newTheme;
}); 

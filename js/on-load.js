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

    const projectsJSON = [
        {
            "proj_name": "Wishlist",
            "desc": "A basic wishlist (in-progress)",
            "a_link": "https://github.com/niroopkris/rsri-wishlist",
            "image_url": "https://pub-b6887010ee1f40558327c353f7d0f5b4.r2.dev/wishlist.png"
        },
        {
            "proj_name": "Course",
            "desc": "General application that teachers and their students can use for their course",
            "a_link": "https://github.com/Nakiti/rsri_projects/tree/master/course",
            "image_url": "https://pub-b6887010ee1f40558327c353f7d0f5b4.r2.dev/course.png"
        },
        {
            "proj_name": "Conf",
            "desc": "An application for creating and viewing research papers",
            "a_link": "https://github.com/Nakiti/rsri_projects/tree/master/conf",
            "image_url": "https://pub-b6887010ee1f40558327c353f7d0f5b4.r2.dev/conf.png"
        },
        {
            "proj_name": "Voltron",
            "desc": "Groups students up and allows them to share their code in a buffer. Below image is the eventual look",
            "a_link": "https://github.com/Nakiti/rsri_projects/tree/master/voltron",
            "image_url": "https://pub-b6887010ee1f40558327c353f7d0f5b4.r2.dev/voltron%20demo.png"
        }
    ];

    if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify(projectsJSON));
    }

});
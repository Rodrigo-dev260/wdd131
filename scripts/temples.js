const menuButton = document.getElementById("menu-button");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", function(){
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }
});

const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");
yearElement.textContent = currentYear;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent =  `Last Modification: ${document.lastModified}`;






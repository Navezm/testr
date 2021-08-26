let menuChapitre = document.querySelectorAll(".menu_chapitre");
let menuPoint = document.querySelectorAll(".menu_point");

menuPoint.forEach((elt) => {
    elt.style.display = "none";
})

menuChapitre.forEach(element => {
    element.addEventListener("click", function() {
        if (this.nextSibling.nextElementSibling.style.display = "none") {
            this.nextSibling.nextElementSibling.style.display = "block";
        } else {
            this.nextSibling.nextElementSibling.style.display = "none";
        }
    })
});

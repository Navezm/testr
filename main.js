String.prototype.ucFirst = function() {
    return this.charAt(0).toUpperCase() + this.substr(1); 
}

HTMLElement.prototype.hide = function() {
    this.style.display = "none";
}

HTMLElement.prototype.show = function() {
    this.style.display = "block";
}

NodeList.prototype.showNode = function() {
    for (let element of this) {
        element.parentElement.nextElementSibling.style.display = "block";
    }
}

NodeList.prototype.hideNode = function() {
    for (let element of this) {
        element.parentElement.nextElementSibling.style.display = "none";
    }
}

let str = "bonjour";

console.log(str.ucFirst());

let menuChapitre = document.querySelectorAll(".menu_chapitre");
let menuPoint = document.querySelectorAll(".menu_point");

// let hideElement = (elt) => {
//     elt.style.display = "none";
// }

// let showElement = (elt) => {
//     elt.style.display = "block";
// }

for (let elt of menuPoint) {
    elt.hide();
}

// for (let elt of menuChapitre) {
//     elt.addEventListener("click", function(){
//         if (this.nextElementSibling.style.display == "none") {
//             this.nextElementSibling.show();
//         } else {
//             this.nextElementSibling.hide();
//         }
//     });
// }

for (let elt of menuChapitre) {
    elt.addEventListener("click", function(){
        if(this.nextElementSibling.style.display == "none") {
            elt.childNodes.showNode();
        } else {
            elt.childNodes.hideNode();
        }
    })
}

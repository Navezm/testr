// String.prototype.ucFirst = function() {
//     return this.charAt(0).toUpperCase() + this.substr(1); 
// }

// let str = "bonjour";

// console.log(str.ucFirst());


/** Création de notre propre prototype */
const Menu = (function(chapitresSelector, pointsSelector){
    this.chapitres = document.querySelectorAll(chapitresSelector);
    this.points = document.querySelectorAll(pointsSelector);
});
Menu.prototype.init = function() {
    this.chapitres.showNode();
    this.points.hideNode();

    for (let element of menuChapitre) {
        element.addEventListener("click", clickListener);
    }
}
Menu.prototype.showPoint = function(points) {
    points.showNode();
}
Menu.prototype.hidePoints = function(points) {
    points.hideNode();
}

const menu = new Menu(".menu_chapitre", ".menu_point");
console.log(menu);

const menuChapitre = document.querySelectorAll(".menu_chapitre");
const menuPoint = document.querySelectorAll(".menu_point");
const btn = document.querySelector("button");

HTMLElement.prototype.hide = function() {
    this.style.display = "none";
}

HTMLElement.prototype.show = function() {
    this.style.display = "block";
}

HTMLElement.prototype.isVisible = function() {
    const style = this.style;

    return style.display && (style.display == "block" || style.display == "inline")
}

NodeList.prototype.showNode = function() {
    this.forEach(node => node.show());
}

NodeList.prototype.hideNode = function() {
    this.forEach(node => node.hide());
}


function init() {
    menuChapitre.showNode();
    menuPoint.hideNode();

    for (let element of menuChapitre) {
        element.addEventListener("click", clickListener);
    }

    btn.addEventListener("click", function() {
        const innerText = this.innerText;

        if (innerText == "Afficher") {
            menuPoint.showNode();
            this.innerText = "Cacher";
        } else {
            menuPoint.hideNode();
            this.innerText = "Afficher";
        }
    })
}

// init();

menu.init();

function clickListener() {
    /** @var {HTMLElement} element */
    const element = this.nextElementSibling;

    if (!element.isVisible()) {
        menuPoint.hideNode()
        element.show();
    } else {
        element.hide()
    }


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

// for (let elt of menuChapitre) {
//     elt.addEventListener("click", function(){
//         if(this.nextElementSibling.style.display == "none") {
//             elt.childNodes.showNode();
//         } else {
//             elt.childNodes.hideNode();
//         }
//     })
// }

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds", age: 19},
//     {firstname : "Kaylee", lastname: "Frye", age: 25},
//     {firstname : "Jayne", lastname: "Cobb", age: 55},
//     {firstname : "Hage", lastname: "Cobb", age: 25},
//     {firstname : "Paul", lastname: "Cobb", age: 35},
//     {firstname : "Jayne", lastname: "Aze", age: 49},
// ];

// function getPersonsAgeMore20(person) {
//     if(person.age >= 25) {
//         return person;
//     }
// }

// console.log(persons.map(getPersonsAgeMore20));


const personnes = [{nom: "Ovyn", prenom: "Flavian"}];

const result = [{nom: 'Ovyn', nb: 1}];

Array.prototype.mapReduce = function(map, reduce) {
    const result = [];

     

    return result;
}
"use strict";
// promesse
var carre = (a) => {
    return new Promise((resolve) => {
        resolve(Math.pow(a, 2));
    });
};
carre(3)
    .then((res) => res + 1) // .then((9) => 9 + 1)
    .then(carre) // carre (10)
    .then((res) => console.log("résultat : " + res)); // affiche 100

// console.log(2 ** 8); d'abord créer le ficher en ts puis le transpiler avec la commande tsc monFichier.ts
// puis appeler le ficher avce la commande node monFIchier.js

// typage de variable
var x = 2;
var y: number = 5;
var z: number | string;
z = 2;
z = "hello"

/*
// Coalescence nulle (??)

let nom: string;

// if(nom == null || nom == undefined){
//     nom = "doe"
// }

// equivaut à
nom ??= 'doe';*
*/

/*
let objet = { nom: "wick", prenom: "john" };
let nom: string, prenom: string;
let nom = objet.nom;
let prenom = objet.prenom;

// equivaut à :

var { nom, prenom } = objet;
*/

/*

// chainage optionnel (?.)

let objet;
let x = 2;
if(x == 0) {
    objet = {nom:"wick", prenom:"john"}
}
console.log(objet.nom)
// renvoie une erreur car objet n'est pas definie. Donc l'accès à l'attribut n'est pas possible.

// équivaut à :

console.log(objet?.nom)

*/

/*
 // déclaration de tableau
var tab: number[] = [2, 5, 56];
// var tab: Array<number> = [ 2,5, 56];
// for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}

for (const elt of tab) {
    console.log(elt)
}

let objet = {nom:"wick", prenom:"john"};
for(const key in objet){
    console.log(key, objet[key]);
}

*/

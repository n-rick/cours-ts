"use strict";
// importation de fonction dans un autre fichier
Object.defineProperty(exports, "__esModule", { value: true });
// import { somme as s } from "./fonction";
// console.log(s(10, 80));
// console.log('**************  | importer dynamiquement un module');
// import("./fonction").then(m => console.log(m.somme1(2, 4)));
const personne_1 = require("./personne");
let personne = new personne_1.Personne();
personne.num = 200;
personne.nom = "Wick";
personne.prenom = "John";
console.log(personne);
let personne2 = new personne_1.Personne(300, "Icar", "Joe");
console.log(personne2);
const adresse_1 = require("./adresse");
let adresse = new adresse_1.Adresse("avenue des champs", "13100", "Aix-en-Provence");
let moi = new personne_1.Personne(20, "Fifi", "Enrick", adresse);
console.log(moi);
// console.log(2 ** 8); d'abord créer le ficher en ts puis le transpiler avec la commande tsc monFichier.ts
// puis appeler le ficher avce la commande node monFIchier.js
// typage de variable
/*
var x = 2;
var y: number = 5;
var z: number | string;
z = 2;
z = "hello"
*/
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

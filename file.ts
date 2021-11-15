// importation de fonction dans un autre fichier

// import { somme as s } from "./fonction";
// console.log(s(10, 80));

// console.log('**************  | importer dynamiquement un module');
// import("./fonction").then(m => console.log(m.somme1(2, 4)));

import {Personne} from "./personne";
// let personne: Personne = new Personne();
// personne.num = 200;
// personne.nom = "Wick";
// personne.prenom = "John";
// console.log(personne);

// let personne2: Personne = new Personne(300, "Icar", "Joe");
// console.log(personne2);

import { Adresse }  from "./adresse";
let adresse: Adresse = new Adresse("avenue des champs", "13100","Aix-en-Provence");
console.log(adresse);


let moi:Personne = new Personne(20, "Fifi", "Enrick", adresse);
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



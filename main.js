"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personne_1 = require("./personne");
var adresse_1 = require("./adresse");
var enseignant_1 = require("./enseignant");
var etudiant_1 = require("./etudiant");
var personne = new personne_1.Personne(); // Si class en abstract on ne pourra plus l'instancier.
personne.num = 200;
personne.nom = "Wick";
personne.prenom = "John";
console.log(personne);
var personne2 = new personne_1.Personne(300, "Icar", "Joe");
console.log(personne2);
var adresse = new adresse_1.Adresse("avenue des champs", "13100", "Aix-en-Provence");
var moi = new personne_1.Personne(20, "fifi", "enrick", adresse);
console.log(moi);
var enseignant = new enseignant_1.Enseignant(600, "magda", "isou", null, 2000);
console.log(enseignant);
var etudiant = new etudiant_1.Etudiant(200, "doe", "john", adresse, "Licence");
console.log(etudiant);
var personnes = [personne2, enseignant, etudiant];
for (var _i = 0, personnes_1 = personnes; _i < personnes_1.length; _i++) {
    var objet = personnes_1[_i];
    if (objet instanceof enseignant_1.Enseignant) {
        console.log("Pour le type Enseignant le salaire est de : " + objet.salaire);
    }
    else if (objet instanceof etudiant_1.Etudiant) {
        console.log("Pour le type Etudiant le niveau est : " + objet.niveau);
    }
    else {
        console.log("Pour le type Personne le num est : " + objet.num);
    }
}

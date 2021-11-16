import { Personne } from "./personne";
import { Adresse } from "./adresse";
import { Enseignant } from "./enseignant";
import { Etudiant } from "./etudiant";
import { Person } from "./person";

let personne: Personne = new Personne(); // Si class en abstract on ne pourra plus l'instancier.
personne.num = 200;
personne.nom = "Wick";
personne.prenom = "John";
console.log(personne);

let personne2: Personne = new Personne(300, "Icar", "Joe");
console.log(personne2);


let adresse: Adresse = new Adresse("avenue des champs", "13100", "Aix-en-Provence");
let moi: Personne = new Personne(20, "fifi", "enrick", adresse);
console.log(moi);

let enseignant: Enseignant = new Enseignant(600, "magda", "isou", null, 2000);
console.log(enseignant);

let etudiant: Etudiant = new Etudiant(200, "doe", "john", adresse, "Licence")
console.log(etudiant);

let personnes: Personne[] = [personne2, enseignant, etudiant];
for (let objet of personnes) {
    if (objet instanceof Enseignant) {
        console.log(`Pour le type Enseignant le salaire est de : ${objet.salaire}`)
    }
    else if (objet instanceof Etudiant) {
        console.log(`Pour le type Etudiant le niveau est : ${objet.niveau}`)
    }
    else {
        console.log(`Pour le type Personne le num est : ${objet.num}`)
    }
}

let person:Person = {num:100, nom="wick", prenom:"John"};
console.log(person);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somme1 = exports.somme = void 0;
function somme(a, b) {
    return a + b;
}
exports.somme = somme;
console.log("******* de base : ");
console.log(somme(10, 5));
// console.log(somme("10", "a"));
console.log("******* avec TS on écrit a:number : ");
// avec TS on ecrira plutôt : 
function somme1(a, b) {
    return a + b;
}
exports.somme1 = somme1;
console.log(somme1(5, 12));
console.log("******* autre façon on demande un retour de type number : ");
// autre façon : 
function somme2(a, b) {
    return a + b;
}
console.log(somme2(5, 5));
console.log("******* paramètre restrin ...numbers : ");
// paramêtre restrein
function somme4(...numbers) {
    let result = 0;
    for (let elt of numbers) {
        result += elt;
    }
    return result;
}
console.log(somme4());
console.log(somme4(4, 5));
console.log(somme4(5, 3, 4));
console.log(somme4(10, 23));
console.log(somme4(13));
console.log("******* exo 1  : ");
// exo : 
function totalCaracteres(...strings) {
    let result = 0;
    for (let elt of strings) {
        result += elt.length;
    }
    return result;
}
console.log(totalCaracteres());
console.log(totalCaracteres("bon"));
console.log(totalCaracteres("bon", "jour"));
console.log(totalCaracteres("bon", "jour", "hello"));
console.log(totalCaracteres("bon", "jour", "hello", "hi"));
// exo 2
console.log("******* exo 2 : ");
function total(...values) {
    let result = 0;
    for (let elt of values) {
        if (typeof elt == "string") {
            result += elt.length;
        }
        else {
            result += elt;
        }
    }
    return result;
}
console.log(total());
console.log(total("bon", 2));
console.log(total("bon", 2, "jour"));

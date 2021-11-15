"use strict";
exports.__esModule = true;
exports.somme = void 0;
function somme(a, b) {
    return a + b;
}
exports.somme = somme;
console.log("******* de base : ");
console.log(somme(10, 5));
console.log(somme("10", "a"));
console.log("******* avec TS on écrit a:number : ");
// avec TS on ecrira plutôt : 
function somme1(a, b) {
    return a + b;
}
console.log(somme1(5, 12));
console.log("******* autre façon on demande un retour de type number : ");
// autre façon : 
function somme2(a, b) {
    return a + b;
}
console.log(somme2(5, 5));
console.log("******* paramètre restrin ...numbers : ");
// paramêtre restrein
function somme4() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var elt = numbers_1[_a];
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
function totalCaracteres() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, strings_1 = strings; _a < strings_1.length; _a++) {
        var elt = strings_1[_a];
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
function total() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var elt = values_1[_a];
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

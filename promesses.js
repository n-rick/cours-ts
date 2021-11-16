// promesse
var carre = function (a) {
    return new Promise(function (resolve) {
        resolve(Math.pow(a, 2));
    });
};
carre(3)
    .then(function (res) { return res + 1; }) // .then((9) => 9 + 1)
    .then(carre) // carre (10)
    .then(function (res) { return console.log("résultat : " + res); }); // affiche 100

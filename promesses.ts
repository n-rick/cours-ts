// promesse

var carre = (a: number) => {
    return new Promise<number>((resolve) => {
        resolve(a ** 2);
    });
};
carre(3)
    .then((res) => res + 1) // .then((9) => 9 + 1)
    .then(carre) // carre (10)
    .then((res) => console.log("résultat : " + res)); // affiche 100



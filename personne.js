"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    // private _num: number;
    // private _nom: string;
    // private _prenom: string;
    // simplification on met les visibilitées dans le constructeur 
    // CREATION DU CONSTRUCTEUR
    function Personne(_num, _nom, _prenom, _adresse) {
        if (_num === void 0) { _num = 0; }
        if (_nom === void 0) { _nom = ""; }
        if (_prenom === void 0) { _prenom = ""; }
        if (_adresse === void 0) { _adresse = null; }
        this._num = _num;
        this._nom = _nom;
        this._prenom = _prenom;
        this._adresse = _adresse;
        this.num = _num;
        // this.nom = nom;
        // this.prenom = prenom;
    }
    Personne.prototype.afficherNomEnMajuscule = function () {
        console.log(this.nom.toUpperCase());
    };
    Personne.prototype.afficherPrenomEnMajuscule = function () {
        console.log(this._prenom.charAt(0).toUpperCase() + this._prenom.slice(1));
    };
    Object.defineProperty(Personne.prototype, "num", {
        // GETTERS 
        get: function () {
            return this._num;
        },
        // SETTERS
        set: function (_num) {
            this._num = (_num >= 0 ? _num : 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (_nom) {
            this._nom = _nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (_prenom) {
            this._prenom = _prenom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "adresse", {
        get: function () {
            return this._adresse;
        },
        set: function (_adresse) {
            this._adresse = _adresse;
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
exports.Personne = Personne;

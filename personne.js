"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    // private _num: number;
    // private _nom: string;
    // private _prenom: string;
    // simplification on met les visibilitées dans le constructeur 
    // CREATION DU CONSTRUCTEUR
    constructor(_num = 0, _nom = "", _prenom = "", _adresse = null) {
        this._num = _num;
        this._nom = _nom;
        this._prenom = _prenom;
        this._adresse = _adresse;
        this.num = _num;
        // this.nom = nom;
        // this.prenom = prenom;
    }
    // GETTERS 
    get num() {
        return this._num;
    }
    get nom() {
        return this._nom;
    }
    get prenom() {
        return this._prenom;
    }
    get adresse() {
        return this._adresse;
    }
    // SETTERS
    set num(_num) {
        this._num = (_num >= 0 ? _num : 0);
    }
    set nom(_nom) {
        this._nom = _nom;
    }
    set prenom(_prenom) {
        this._prenom = _prenom;
    }
    set adresse(_adresse) {
        this._adresse = _adresse;
    }
}
exports.Personne = Personne;

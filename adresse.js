"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
class Adresse {
    constructor(_rue = "", _codePostal = "", _ville = "") {
        this._rue = _rue;
        this._codePostal = _codePostal;
        this._ville = _ville;
    }
    // GETTERS
    get rue() {
        return this._rue;
    }
    get codePostal() {
        return this._codePostal;
    }
    get ville() {
        return this._ville;
    }
    // SETTERS
    set rue(_rue) {
        this.rue = _rue;
    }
    set codePostal(_codePostal) {
        this.codePostal = _codePostal;
    }
    set ville(_ville) {
        this.ville = _ville;
    }
}
exports.Adresse = Adresse;

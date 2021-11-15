"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(_rue, _codePostal, _ville) {
        if (_rue === void 0) { _rue = ""; }
        if (_codePostal === void 0) { _codePostal = ""; }
        if (_ville === void 0) { _ville = ""; }
        this._rue = _rue;
        this._codePostal = _codePostal;
        this._ville = _ville;
    }
    Object.defineProperty(Adresse.prototype, "rue", {
        // GETTERS
        get: function () {
            return this._rue;
        },
        // SETTERS
        set: function (_rue) {
            this.rue = _rue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "codePostal", {
        get: function () {
            return this._codePostal;
        },
        set: function (_codePostal) {
            this.codePostal = _codePostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "ville", {
        get: function () {
            return this._ville;
        },
        set: function (_ville) {
            this.ville = _ville;
        },
        enumerable: false,
        configurable: true
    });
    return Adresse;
}());
exports.Adresse = Adresse;

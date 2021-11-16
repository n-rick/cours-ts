"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
var personne_1 = require("./personne");
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant(_num, _nom, _prenom, _adresse, _niveau) {
        if (_num === void 0) { _num = 0; }
        if (_nom === void 0) { _nom = ""; }
        if (_prenom === void 0) { _prenom = ""; }
        if (_niveau === void 0) { _niveau = ""; }
        var _this = _super.call(this, _num, _nom, _prenom, _adresse) || this;
        _this._niveau = _niveau;
        return _this;
    }
    Object.defineProperty(Etudiant.prototype, "niveau", {
        get: function () {
            return this._niveau;
        },
        set: function (_niveau) {
            this._niveau = _niveau;
        },
        enumerable: false,
        configurable: true
    });
    return Etudiant;
}(personne_1.Personne));
exports.Etudiant = Etudiant;

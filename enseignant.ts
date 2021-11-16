import { Adresse } from "./adresse";
import { Personne } from "./personne";

export class Enseignant extends Personne{
    constructor (
        _num:number = 0,
        _nom: string ="",
        _prenom: string="",
        _adresse: Adresse |null,
        private _salaire:number = 0){
            super(_num, _nom, _prenom, _adresse);
        }
    
    public get salaire() : number {
        return this._salaire
    }

    
    public set salaire(_salaire : number) {
        this._salaire = _salaire;
    }   
    
}
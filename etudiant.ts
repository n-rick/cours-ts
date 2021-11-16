import { Adresse } from "./adresse";
import { Personne } from "./personne";

export class Etudiant extends Personne{
    constructor(
        _num:number = 0,
        _nom: string ="",
        _prenom: string="",
        _adresse: Adresse | null,
        private _niveau:string = "",
    ){
        super(_num, _nom, _prenom, _adresse);
    }

    public get niveau() : string {
        return this._niveau;
    }
    
    public set niveau(_niveau : string) {
        this._niveau = _niveau;
    } 
    
}
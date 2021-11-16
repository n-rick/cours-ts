import { Adresse } from './adresse';
import { MiseEnForme } from './mise-en-forme';
export class Personne implements MiseEnForme {
    // private _num: number;
    // private _nom: string;
    // private _prenom: string;

    // simplification on met les visibilitées dans le constructeur 

    // CREATION DU CONSTRUCTEUR
    public constructor(private _num: number = 0, private _nom: string = "", private _prenom: string = "", private _adresse: Adresse | null = null) {
        this.num = _num;
        // this.nom = nom;
        // this.prenom = prenom;
    }
    afficherNomEnMajuscule(): void {
        console.log(this.nom.toUpperCase());
    }
    afficherPrenomEnMajuscule(): void {
        console.log(this._prenom.charAt(0).toUpperCase()+ this._prenom.slice(1));
    }

    // GETTERS 
    public get num(): number {
        return this._num;
    }

    public get nom(): string {
        return this._nom;
    }

    public get prenom(): string {
        return this._prenom;
    }

    public get adresse(): Adresse | null {
        return this._adresse;
    }

    // SETTERS
    public set num(_num: number) {
        this._num = (_num >= 0 ? _num : 0);
    }


    public set nom(_nom: string) {
        this._nom = _nom;
    }

    public set prenom(_prenom: string) {
        this._prenom = _prenom;
    }

    public set adresse(_adresse: Adresse | null) {
        this._adresse = _adresse;
    }

}


export class Adresse {
    public constructor(private _rue: string = "", private _codePostal: string = "", private _ville: string = "") {       
        
    }

    // GETTERS
    public get rue(): string {
        return this._rue;
    }

    public get codePostal() : string {
        return this._codePostal;
    }

    
    public get ville() : string {
        return this._ville;
    }
    
    // SETTERS
    public set rue(_rue : string) {
        this.rue = _rue;
    }

    public set codePostal(_codePostal : string) {
        this.codePostal = _codePostal;
    }
    
    public set ville(_ville : string) {
        this.ville = _ville;
    }    
    
}
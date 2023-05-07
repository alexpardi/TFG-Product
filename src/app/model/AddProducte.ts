export class AddProducte{
  _id?: number;
  ProdID: string;
  ProdNom: string;
  ProdAfegits: number;
  ProdPreu: number;
  ProdTalla: number;
  ProdDescripcio: string;
  ProdTipus: string;
  ProdEsport: object;
  ProdImatge: string;

  constructor(ProdID: string, ProdNom: string, ProdAfegits: number, ProdPreu: number, ProdTalla: number, ProdDescripcio: string, ProdTipus: string, ProdEsport: object, ProdImatge: string) {
    this.ProdID = ProdID;
    this.ProdNom = ProdNom;
    this.ProdAfegits = ProdAfegits;
    this.ProdPreu = ProdPreu;
    this.ProdTalla = ProdTalla;
    this.ProdDescripcio = ProdDescripcio;
    this.ProdTipus= ProdTipus;
    this.ProdEsport= ProdEsport;
    this.ProdImatge = ProdImatge;
  }
}

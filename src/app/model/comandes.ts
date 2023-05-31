export class Comandes {
  _id?: string;
  UserName: string;
  UserMail: string;
  UserNameReal: string;
  Pais: string;
  Ciutat: string;
  CodiPostal: string;
  CarrerNum: string;
  NumeroTelf: string;
  LlistaProductes: string[];
  TallaProductes: string[];
  QuantitatProductes: string[];


  constructor( UserName: string, UserMail: string, UserNameReal: string, Pais: string, Ciutat: string, CodiPostal: string, CarrerNum: string, NumeroTelf: string, LlistaProductes: string[], TallaProductes: string[], QuantitatProductes: string[],) {
    this.UserName = UserName;
    this.UserMail = UserMail;
    this.UserNameReal = UserNameReal;
    this.Pais = Pais;
    this.Ciutat = Ciutat;
    this.CodiPostal = CodiPostal;
    this.CarrerNum = CarrerNum;
    this.NumeroTelf = NumeroTelf;
    this.LlistaProductes = LlistaProductes;
    this.TallaProductes = TallaProductes;
    this.QuantitatProductes = QuantitatProductes;

  }
}

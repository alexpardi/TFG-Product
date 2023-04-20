export class AddUser{
  _id?: number;
  UserName: string;
  UserMail: string;
  UserNameReal: string;
  UserContrasenya: string;

  constructor(UserName: string, UserMail: string, UserNameReal: string, UserContrasenya: string) {
    this.UserName = UserName;
    this.UserMail = UserMail;
    this.UserNameReal = UserNameReal;
    this.UserContrasenya = UserContrasenya;
  }
}

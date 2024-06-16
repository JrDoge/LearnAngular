export class User {
  login: string;
  password: string;
  token: string;
  name: string;
  constructor(name: string, login: string, password: string) {
    this.login = login;
    this.password = password;
    this.token = `${login}25643534${password}`;
    this.name = name;
  }
}

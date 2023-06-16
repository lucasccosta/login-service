import { unprocessableEntityError } from "../../../infra/http/helper";

class User {
  private _id: string
  private _username: string;
  private _email: string;
  private _password: string;
  private _createdAt: Date

  constructor({id, username, email, password, createdAt}) {
    this._username = username;
    this._id = id;
    this._email = email;
    this._password = password;
    this._createdAt = createdAt;
    this.validate();
  }

  get id(): string {
    return this._id;
  }
  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }
  get password(): string {
    return this._password;
  }

  validate() {
    if (this.username.length == 0) {
      throw unprocessableEntityError("Please insert a valid username");
    }
    if (this.email.length == 0) {
      throw unprocessableEntityError("Please insert a valid email");
    }
    if (this.password.length < 8) {
      throw unprocessableEntityError("Please insert a password with at least 8 characters");
    }
  }

  changeEmail(email: string): void {
    this._email = email;
    this.validate();
  }

  changePassword(password: string): void {
    this._password = password;
    this.validate();
  }
}

export { User };
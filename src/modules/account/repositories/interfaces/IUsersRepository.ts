import { UsersModel } from "../../../../db/sequelize/models/UserModel";
import { ICreateUsersRequest } from "../../DTOs/IUsersDTO";

export interface IUsersRepository {         
  getUsers (): Promise<UsersModel[]>
  getUserByEmail(email: string): Promise<UsersModel>
  getUserByUsername(username: string): Promise<UsersModel>
  createUser({username, email, password}: ICreateUsersRequest): Promise<UsersModel>
}
import { UsersModel } from "../../../db/sequelize/models/UserModel";
import { ICreateUsersRequest } from "../DTOs/IUsersDTO";
import { IUsersRepository } from "./interfaces/IUsersRepository";

export class UsersRepository implements IUsersRepository {
   private userModel = UsersModel
  
  async createUser({ username, email, password }: ICreateUsersRequest): Promise<UsersModel> {
    return await this.userModel.create({username, email, password});
  }

  async getUsers (): Promise<UsersModel[]> {
    return await this.userModel.findAll();

  }

  async getUserByEmail(email): Promise<UsersModel> {
    const a =  await this.userModel.findOne({where: { email } });
    return a
  }

  async getUserByUsername(username) {
    return await this.userModel.findOne({where: { username } });
  }

}

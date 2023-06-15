import { UsersModel } from "../../../db/sequelize/models/UserModel";
import { ICreateUsersRequest } from "../DTOs/IUsersDTO";
import { IUsersRepository } from "./interfaces/IUsersRepository";
import { User } from "../domain/Users";

export class UsersRepository implements IUsersRepository {
   private userModel = UsersModel
  
  async createUser({ username, email, password }: ICreateUsersRequest): Promise<User> {
    console.log("params: ", username, email, password)
    const user =  await this.userModel.create({username, email, password});
    return new User({username: user.dataValues.username, email: user.dataValues.email, password: user.dataValues.password, createdAt: user.dataValues.created_at})
  }

  async getUsers (): Promise<User[]> {
    const users = await this.userModel.findAll();
    return users.map(user => new User({username: user.dataValues.username, email: user.dataValues.email, password: user.dataValues.password, createdAt: user.dataValues.created_at}))
  }

  async getUserByEmail(email): Promise<User> {
    console.log(email)
    const user =  await this.userModel.findOne({where: { email } });
    if(user){
      return new User({username: user.dataValues.username, email: user.dataValues.email, password: user.dataValues.password, createdAt: user.dataValues.created_at});
    }
    return
  }

  async getUserByUsername(username): Promise<User> {
    const user =  await this.userModel.findOne({where: { username } });
    console.log(username)
    if(user) {
      return new User({username: user.dataValues.username, email: user.dataValues.email, password: user.dataValues.password, createdAt: user.dataValues.created_at});
    }
    return
  }

}

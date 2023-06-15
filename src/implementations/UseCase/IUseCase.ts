import { UsersModel } from "../../db/sequelize/models/UserModel";
import { ICreateUsersRequest } from "../../modules/account/DTOs/IUsersDTO";

export interface IUseCase {
  create(data: ICreateUsersRequest): Promise<UsersModel>;
}
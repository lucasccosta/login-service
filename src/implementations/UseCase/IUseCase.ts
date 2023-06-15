import { ICreateUsersRequest } from "../../modules/account/DTOs/IUsersDTO";
import { User } from "../../modules/account/domain/Users";

export interface IUseCase {
  create(data: ICreateUsersRequest): Promise<User>;
}
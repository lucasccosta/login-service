import { User } from "../../domain/Users"; 
import { ICreateUsersRequest } from "../../DTOs/IUsersDTO";

export interface IUsersRepository {         
  getUsers (): Promise<User[]>
  getUserByEmail(email: string): Promise<User>
  getUserByUsername(username: string): Promise<User>
  createUser({username, email, password}: ICreateUsersRequest): Promise<User>
}
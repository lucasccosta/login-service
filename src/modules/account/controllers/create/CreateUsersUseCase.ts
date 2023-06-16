import { IUseCase } from "../../../../implementations/UseCase/IUseCase";
import { databaseError } from "../../../../infra/http/helper";
import { ICreateUsersRequest } from "../../DTOs/IUsersDTO";
import { User } from "../../domain/Users";
import * as bcrypt from "bcryptjs"
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

export class CreateUsersUseCase implements IUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }
  async create(data: ICreateUsersRequest): Promise<User> {
    const { username, email, password } = data;

    let userAlreadyExists = await this.usersRepository.getUserByEmail(email);
    if(userAlreadyExists) throw databaseError("User already exists", 409)
    
    userAlreadyExists = await this.usersRepository.getUserByUsername(username);
    if(userAlreadyExists) throw databaseError("User already exists", 409)

    const user = await this.usersRepository.createUser({
      username,
      email,
      password: bcrypt.hashSync(password, 8)
    })

    return user
  }

}

import * as bcrypt from "bcryptjs"
import { IUsersRepository } from "../../account/repositories/interfaces/IUsersRepository";
import { unauthorizedError } from "../../../infra/http/helper";
import * as jwt from "jsonwebtoken"
import 'dotenv/config'

export class AuthenticateUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }
  async authenticate(data) {
    const { email, password } = data;

    const user = await this.usersRepository.getUserByEmail(email);
    if(!user) throw unauthorizedError(`User with email ${email} not found`)
    
    console.log("user: ", user)
    const isValidPassword = await bcrypt.compare(password, user.password)
    console.log("isValidPassword: ", isValidPassword)
    if(!isValidPassword) throw unauthorizedError("The password is incorrect") 

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" })

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      },
      token
    }
  }

}

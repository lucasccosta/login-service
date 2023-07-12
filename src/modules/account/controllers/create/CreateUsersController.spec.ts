import { Sequelize } from "sequelize-typescript";
import { UsersModel } from "../../../../config/db/sequelize/models/UserModelInMemory";
import { CreateUsersController } from "./CreateUsersController";
import { UsersRepository } from "../../repositories/UsersRepository";
import { CreateUsersUseCase } from "./CreateUsersUseCase";
import { faker } from "@faker-js/faker"

describe("Create Users Controller unit tests", () => {
  describe("#create", () => {
    let sequelize: Sequelize;
    beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory:",
        logging: false,
        sync: { force: true },
      });
      sequelize.addModels([UsersModel]);
      await sequelize.sync();
    });
    afterEach(async () => {
      await sequelize.close();
    });

    const usersRepository = new UsersRepository()
    const createUsersUseCase = new CreateUsersUseCase(usersRepository)
    const createUsersController = new CreateUsersController(createUsersUseCase)
    
    it("should create an user", async () => {
      const httpRequest = {
        body:{
          data: {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
          }
        }
      };

      // @ts-ignore
      const response = await createUsersController.handle(httpRequest)
      console.log("response: ", response.body._username)

      expect(response.statusCode).toEqual(200);
      expect(response).toHaveProperty("body._username", response.body.username);
      expect(response).toHaveProperty("body._email", response.body.email);
      expect(response).toHaveProperty("body._password", response.body.password);
    });

    it("should responde an error about missing params", async () => {
      const httpRequest = {
        body:{
          data: {
              email: "test@xmail.com",
              password: "test1234456",
            }
          }
      }

      // @ts-ignore
      const response = await createUsersController.handle(httpRequest)

      expect(response.statusCode).toBe(422)
      expect(response.body).toEqual({message: "You need to pass all params to perform this action"})
    });

    it("should responde an error about missing params", async () => {
      const httpRequest = {
        body:{
          data: {
              username: "user test",
              email: "test@xmail.com",
            }
          }
        }

      // @ts-ignore
      const response = await createUsersController.handle(httpRequest)

      expect(response.statusCode).toBe(422)
      expect(response.body).toEqual({message: "You need to pass all params to perform this action"})
    });

    it("should responde an error about missing params", async () => {
      const httpRequest = {
        body:{
          data: {
              username: "user test",
              password: "test1234456",
            }
          }
        }

      // @ts-ignore
      const response = await createUsersController.handle(httpRequest)

      expect(response.statusCode).toBe(422)
      expect(response.body).toEqual({message: "You need to pass all params to perform this action"})
    });
  })
});
import { Request, Response } from "express";
import { IUseCase } from "../../../../implementations/UseCase/IUseCase";
import { IControllers } from "./IControllers";
import { HttpResponse } from "../../adapters/IAdapters";
import { okResponse, serverError } from "../../../../infra/http/helper";

export class CreateUsersController{
  private createUsersUseCase: IUseCase;
  
  constructor(createUsersUseCase: IUseCase) {
    this.createUsersUseCase = createUsersUseCase;
  }

  async handle(
    httpRequest: Request,
  ): Promise<HttpResponse> {
    try {
      const { data } = httpRequest.body;
  
      const response = await this.createUsersUseCase.create(data);
  
      return okResponse(response)
      
    } catch (error) {
      return error
    }
  }
}

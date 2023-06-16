import { Request, Response } from "express";
import { IUseCase } from "../../../../implementations/UseCase/IUseCase";
import { HttpResponse } from "../../../../infra/DTOs/IAdapters";
import { okResponse, unprocessableEntityError } from "../../../../infra/http/helper";

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
      if(!data.username || !data.password || !data.email) throw unprocessableEntityError("You need to pass all params to perform this action")
  
      const response = await this.createUsersUseCase.create(data);
  
      return okResponse(response)
      
    } catch (error) {
      return error
    }
  }
}

import { Request, Response } from "express";
import { HttpResponse } from "../../../infra/DTOs/IAdapters";
import { okResponse, unprocessableEntityError } from "../../../infra/http/helper";
import { IUseCase } from "../UseCase/IUseCase";

export class AuthenticateController{
  private authenticateUseCase: IUseCase;
  
  constructor(authenticateUseCase: IUseCase) {
    this.authenticateUseCase = authenticateUseCase;
  }

  async handle(
    httpRequest: Request,
  ): Promise<HttpResponse> {
    try {
      const { data } = httpRequest.body;
      if(!data.password || !data.email) throw unprocessableEntityError("You need to pass all params to perform this action")
  
      const response = await this.authenticateUseCase.authenticate(data);
  
      return okResponse(response)
      
    } catch (error) {
      return error
    }
  }
}

import { Request, Response } from "express";

export interface IControllers {
  handle(httpRequest: Request, httpResponse: Response): Promise<Response>
}
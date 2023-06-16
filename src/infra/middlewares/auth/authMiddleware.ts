import { Request, Response, NextFunction } from "express";
import { unauthorizedError } from "../../http/helper";
import * as jwt from "jsonwebtoken"
import 'dotenv/config'
import { TokenPayload } from "../../../modules/authenticate/DTOs";

export const ensureUserAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers;

  if(!authorization) return response.status(401).json(unauthorizedError("Missing authorization header").body.message)

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET)

    const { id } = data as TokenPayload

    request.userId = id

    return next()
  } catch (error) {
    throw unauthorizedError("Missing authorization header")
  }
}
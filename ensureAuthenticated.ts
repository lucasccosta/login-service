import { Request, Response, NextFunction } from "express"
import jsonwebtoken from "jsonwebtoken"
import { AppError } from "../errors/AppError";
import auth from "@config/auth/auth";
import jwkToPem from 'jwk-to-pem'
import jwk from '@config/auth/jwks.json'
import { CognitoJwtVerifier } from "aws-jwt-verify";
import { UsersRepository } from "@modules/accounts/infra/prisma/repositories/UsersRepository";

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) throw new AppError("Token is missing", 401)

  const [, token] = authHeader.split(" ");

  try {
    const verifier = CognitoJwtVerifier.create({
      userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
      tokenUse: "access",
      clientId: process.env.AWS_COGNITO_CLIENT_ID
    });

    const payload = await verifier.verify(
      token // the JWT as string
    );
    
    // console.log("Token is valid. Payload:", payload);
    
    // Not ideal, but temporary
    const userRepository = new UsersRepository()
    
    const user = await userRepository.findByUsername(payload.username)

    request.user = {
      id: user.id
    }
  
    next()
  } catch(err) {
    console.log("ensureAuthenticated(Error) =>", err)
    if(err?.toString().includes("Token expired")) throw new AppError("Token expired", 401)
    
    throw new AppError("Token is invalid", 401)
  }
}
import { HttpResponse } from '../ports/http'
import { DatabaseError } from '../errors/DatabaseError'
import { ServerError } from '../errors/ServerError';

export const okResponse = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const databaseError = (message: string, statusCode): HttpResponse => ({
  statusCode,
  body: new DatabaseError({message})
})

export const serverError = (message: string): HttpResponse => ({
  statusCode: 500,
  body: new ServerError({message})
})

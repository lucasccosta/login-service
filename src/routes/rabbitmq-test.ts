import { Router } from "express";
import RabbitmqServer from "../config/rabbitmq/rabbitmq-server";

const rabbitmqRouter = Router();

rabbitmqRouter.post('/test', async(request, response) =>{
  const server = new RabbitmqServer("amqp://admin:admin@rabbitmq:5672")
  console.log("server: ", server);
  await server.start()
  response.send(request.body)
} )

export { rabbitmqRouter }
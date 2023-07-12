import client, { Connection, Channel, connect } from "amqplib";


export default class RabbitmqServer {

  private connection: Connection;
  private channel: Channel;

  constructor(private uri: string) {}

  async start(): Promise<void> {
    console.log(this.uri)
    this.connection = await client.connect(this.uri);
    this.channel = await this.connection.createChannel()
  }
}

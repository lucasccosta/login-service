import { createConnection } from "typeorm";

export const dbConnect = async () => {
  const connection = await createConnection();

  console.log(`Service connected to database ${connection.options.database}`);

  process.on("SIGINT", () => {
    connection.close().then(() => console.log("Connection closed"))
  })
}
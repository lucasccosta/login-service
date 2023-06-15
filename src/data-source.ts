import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "login-service",
    synchronize: true,
    logging: false,
    subscribers: [],
    migrations: [__dirname + '/../../typeorm-migrations/*.{ts,js}'],
    entities: [__dirname + '/../**/entity/*.{ts,js}'],
})
import { createConnection } from 'typeorm';

createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
       "./src/app/model/**/*.ts"
    ],
    migrations: [
       "./src/database/migration/*.ts"
    ],
    
    cli: {
        "migrationsDir": "./src/database/migration"
    }
});

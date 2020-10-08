import "reflect-metadata";

import { createConnection } from "typeorm";

export const createSqliteConnection = () =>
  createConnection()
    .then((res) => console.log("Database is UP", res.name))
    .catch((err) => console.log("Database is Down", err.message));

import 'reflect-metadata';

import { createConnection } from 'typeorm';

import { User, Document } from './entities';

export const createSqliteConnection = () =>
  createConnection({
    synchronize: true,
    type: 'sqlite',
    database: './src/database/data.sqlite',
    entities: [User, Document],
  })
    .then((res) => console.log('Database is UP', res.name))
    .catch((err) => console.log('Database is Down', err.message));

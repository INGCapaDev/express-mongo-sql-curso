import { usersModelMongo } from './nosql/users.js';
import { storagesModelMongo } from './nosql/storage.js';
import { tracksModelMongo } from './nosql/tracks.js';
import { usersModelMySql } from './sql/users.js';
import { tracksModelMySql } from './sql/tracks.js';
import { storagesModelMySql } from './sql/storage.js';

const ENGINE_DB = process.env.ENGINE_DB;

let usersModel = usersModelMySql;
let storagesModel = storagesModelMySql;
let tracksModel = tracksModelMySql;

if (ENGINE_DB === 'nosql') {
  usersModel = usersModelMongo;
  storagesModel = storagesModelMongo;
  tracksModel = tracksModelMongo;
}

export const models = {
  usersModel,
  storagesModel,
  tracksModel,
};

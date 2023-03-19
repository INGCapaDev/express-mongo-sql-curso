import { usersModelMongo } from './nosql/users.js';
import { storagesModelMongo } from './nosql/storage.js';
import { tracksModelMongo } from './nosql/tracks.js';

export const models = {
  usersModel: usersModelMongo,
  storagesModel: storagesModelMongo,
  tracksModel: tracksModelMongo,
};

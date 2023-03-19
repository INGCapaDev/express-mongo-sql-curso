import express from 'express';
export const router = express.Router();

/*
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const PATH_ROUTES = dirname(fileURLToPath(import.meta.url));


const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension();
  if (name !== 'index') {
    router.use(`/${name}`, routesName); // * http://localhost:3000/api/name
  }
});
*/

import { tracksRoutes } from './tracks.routes.js';

router.use('/tracks', tracksRoutes);

import express from 'express';
export const tracksRoutes = express.Router();
import tracksController from '../controllers/tracks.js';
import { validatorCreateItems } from '../validators/tracks.js';
import { customHeader } from '../middleware/customHeader.js';

// TODO https://localhost/api/tracks GET, POST, DELETE, PUT

tracksRoutes.get('/', tracksController.getItems);

tracksRoutes.post(
  '/',
  validatorCreateItems,
  customHeader,
  tracksController.createItems
);

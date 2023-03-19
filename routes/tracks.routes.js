import express from 'express';
export const tracksRoutes = express.Router();
import tracksController from '../controllers/tracks.js';

// TODO https://localhost/api/tracks GET, POST, DELETE, PUT

tracksRoutes.get('/', tracksController.getItems);
tracksRoutes.post('/', tracksController.createItems);

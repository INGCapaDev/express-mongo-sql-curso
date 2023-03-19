import express from 'express';
export const storageRoutes = express.Router();
import storageController from '../controllers/storage.js';

// * Middlewares
import { uploadMiddleware } from '../utils/handleStorage.js';

// TODO https://localhost/api/storage GET, POST, DELETE, PUT

storageRoutes.post(
  '/',
  uploadMiddleware.single('myfile'),
  storageController.createItems
);

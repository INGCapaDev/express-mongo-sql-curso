import express from 'express';
export const storageRoutes = express.Router();
import storageController from '../controllers/storage.js';

// TODO Middlewares and Validators
import { uploadMiddleware } from '../utils/handleStorage.js';
import { validatorIsValidId } from '../validators/storage.js';

// TODO https://localhost/api/storage GET, POST, DELETE, PUT

/**
 * * Get Files
 */
storageRoutes.get('/', storageController.getItems);

/**
 * * Get File Detail
 */
storageRoutes.get('/:id', validatorIsValidId, storageController.getItem);

/**
 * * Upload File
 */
storageRoutes.post(
  '/',
  uploadMiddleware.single('myfile'),
  storageController.createItems
);

/**
 * ! Delete File
 */
storageRoutes.delete('/:id', validatorIsValidId, storageController.deleteItems);

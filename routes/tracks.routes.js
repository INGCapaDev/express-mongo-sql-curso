import express from 'express';
export const tracksRoutes = express.Router();
import tracksController from '../controllers/tracks.js';

// TODO Middlewares and Validators
import { authMiddleware } from '../middleware/session.js';
import { checkRol } from '../middleware/rolMiddleware.js';
import {
  validatorIsValidId,
  validatorIsValidItem,
} from '../validators/tracks.js';

// TODO https://localhost/api/tracks GET, POST, DELETE, PUT

/**
 * * Get Tracks
 */
tracksRoutes.get('/', authMiddleware, tracksController.getItems);

/**
 * * Get Detail Track
 */
tracksRoutes.get(
  '/:id',
  authMiddleware,
  validatorIsValidId,
  tracksController.getItem
);

/**
 * * Create Track
 */
tracksRoutes.post(
  '/',
  authMiddleware,
  checkRol(['Admin', 'User']),
  validatorIsValidItem,
  tracksController.createItems
);

/**
 * * Update Track
 */
tracksRoutes.put(
  '/:id',
  authMiddleware,
  checkRol(['Admin', 'User']),
  validatorIsValidId,
  validatorIsValidItem,
  tracksController.updateItems
);

/**
 * ! Delete Track
 */
tracksRoutes.delete(
  '/:id',
  authMiddleware,
  checkRol(['Admin']),
  validatorIsValidId,
  tracksController.deleteItems
);

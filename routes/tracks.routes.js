import express from 'express';
export const tracksRoutes = express.Router();
import tracksController from '../controllers/tracks.js';
import {
  validatorIsValidId,
  validatorIsValidItem,
} from '../validators/tracks.js';

// TODO https://localhost/api/tracks GET, POST, DELETE, PUT

/**
 * Get Tracks
 */
tracksRoutes.get('/', tracksController.getItems);

/**
 * Get Detail Track
 */
tracksRoutes.get('/:id', validatorIsValidId, tracksController.getItem);

/**
 * Create Track
 */
tracksRoutes.post('/', validatorIsValidItem, tracksController.createItems);

/**
 * Update Track
 */
tracksRoutes.put(
  '/:id',
  validatorIsValidId,
  validatorIsValidItem,
  tracksController.updateItems
);

/**
 * Delete Track
 */
tracksRoutes.delete('/:id', validatorIsValidId, tracksController.deleteItems);

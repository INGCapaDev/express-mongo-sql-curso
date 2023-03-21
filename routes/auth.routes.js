import express from 'express';
export const authRoutes = express.Router();
import authController from '../controllers/auth.js';

// TODO Middlewares and Validators
import {
  validatorLoginAuth,
  validatorRegisterAuth,
} from '../validators/auth.js';

// TODO https://localhost/api/auth/register
/**
 * * Register auth
 */
authRoutes.post(
  '/register',
  validatorRegisterAuth,
  authController.registerController
);

// TODO https://localhost/api/auth/login

authRoutes.post('/login', validatorLoginAuth, authController.loginController);

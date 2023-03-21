import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

export const validatorRegisterAuth = [
  check('name').exists().notEmpty().isLength({ min: 3, max: 99 }),
  check('age').exists().notEmpty().isNumeric({ min: 1, max: 150 }),
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => validateResults(req, res, next),
];

export const validatorLoginAuth = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => validateResults(req, res, next),
];

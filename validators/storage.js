import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

export const validatorIsValidId = [
  check('id').exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

export const validatorIsValidItem = [
  check('name').exists().notEmpty(),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist_name').exists().notEmpty(),
  check('artist_nickname').exists().notEmpty(),
  check('artist_nationality').exists().notEmpty(),
  check('duration_start').exists().notEmpty().isNumeric(),
  check('duration_end').exists().notEmpty().isNumeric(),
  check('mediaId').exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

export const validatorIsValidId = [
  check('id').exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

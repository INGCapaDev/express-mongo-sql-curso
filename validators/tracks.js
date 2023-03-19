import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

export const validatorCreateItems = [
  check('name').exists().notEmpty(),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist').exists().notEmpty(),
  check('artist.name').exists().notEmpty(),
  check('artist.nickname').exists().notEmpty(),
  check('artist.nationality').exists().notEmpty(),
  check('duration').exists().notEmpty(),
  check('duration.start').exists().notEmpty().isNumeric(),
  check('duration.end').exists().notEmpty().isNumeric(),
  check('mediaId').exists().notEmpty().isMongoId(),
  (req, res, next) => validateResults(req, res, next),
];

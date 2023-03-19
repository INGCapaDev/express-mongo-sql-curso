import { models } from '../models/index.js';

/**
 * Get database list
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await models.tracksModel.find({});
  res.send({ data });
};

/**
 * Get detail
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insert registry
 * @param {*} req
 * @param {*} res
 */
const createItems = async (req, res) => {
  const { body } = req;
  const data = await models.tracksModel.create(body);
  res.send({ data });
};

/**
 * Update registry
 * @param {*} req
 * @param {*} res
 */
const updateItems = (req, res) => {};

/**
 * Delete registry
 * @param {*} req
 * @param {*} res
 */
const deleteItems = (req, res) => {};

export default {
  getItem,
  getItems,
  createItems,
  updateItems,
  deleteItems,
};

import { models } from '../models/index.js';
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Get database list
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await models.storagesModel.find({});
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
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await models.storagesModel.create(fileData);
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

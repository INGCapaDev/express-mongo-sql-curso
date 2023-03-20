import { matchedData } from 'express-validator';
import { models } from '../models/index.js';
import { handleHttpError } from '../utils/handleError.js';

/**
 * Get database list
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await models.tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_TRACKS');
  }
};

/**
 * Get detail
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.tracksModel.findById(id);
    if (!data) {
      throw new Error();
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_TRACK_DETAIL');
  }
};

/**
 * Insert registry
 * @param {*} req
 * @param {*} res
 */
const createItems = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await models.tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_TRACK');
  }
};

/**
 * Update registry
 * @param {*} req
 * @param {*} res
 */
const updateItems = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await models.tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_TRACK');
  }
};

/**
 * Delete registry
 * @param {*} req
 * @param {*} res
 */
const deleteItems = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.tracksModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_TRACK');
  }
};

export default {
  getItem,
  getItems,
  createItems,
  updateItems,
  deleteItems,
};

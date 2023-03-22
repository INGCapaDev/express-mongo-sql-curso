import { matchedData } from 'express-validator';
import { models } from '../models/index.js';
import { handleHttpError } from '../utils/handleError.js';

/**
 * * Get database list
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await models.tracksModel.findAll({});
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_TRACKS');
  }
};

/**
 * * Get detail
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const user = req.user;
    const { id } = matchedData(req);
    const data = await models.tracksModel.findByPk(id);
    if (!data) {
      return handleHttpError(res, 'ERROR_TRACK_NOT_EXISTS');
    }
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_TRACK_DETAIL');
  }
};

/**
 * * Insert registry
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
 * * Update registry
 * @param {*} req
 * @param {*} res
 */
const updateItems = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const track = await models.tracksModel.findByPk(id);
    if (!track) {
      return handleHttpError(res, 'ERROR_TRACK_NOT_EXISTS');
    }
    const data = await models.tracksModel.update(body, { where: { id: id } });
    res.send({ data: body, message: `TRACK_UPDATE_SUCCESSFULLY_ID_${id}` });
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_TRACK');
  }
};

/**
 * * Delete registry
 * @param {*} req
 * @param {*} res
 */
const deleteItems = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.tracksModel.delete({ _id: id });
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

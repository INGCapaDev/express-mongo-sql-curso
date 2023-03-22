import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { models } from '../models/index.js';
import { handleHttpError } from '../utils/handleError.js';
import { matchedData } from 'express-validator';
import { getPropertiesDatabase } from '../utils/handlePropertiesEngine.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = path.join(__dirname, '../uploads');

/**
 * * Get database list
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await models.storagesModel.findAll({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_FILES');
  }
};

/**
 * * Get detail
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await models.storagesModel.findByPk(id);
    if (!data) {
      return handleHttpError(res, 'ERROR_FILE_NOT_EXISTS');
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_FILE_DETAIL');
  }
};

/**
 * * Insert registry
 * @param {*} req
 * @param {*} res
 */
const createItems = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}uploads/${file.filename}`,
    };
    const data = await models.storagesModel.create(fileData);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_FILE');
  }
};

/**
 * ! Delete registry
 * @param {*} req
 * @param {*} res
 */
const deleteItems = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await models.storagesModel.findByPk(id);
    if (!dataFile) {
      return handleHttpError(res, 'ERROR_FILE_NOT_EXISTS');
    }
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`; // * Route like : /C:/.../uploads/file-3423.ext
    await models.storagesModel.destroy({
      where: {
        id: id,
      },
    });
    fs.unlinkSync(filePath.toString());
    const data = {
      filePath,
      deleted: 1,
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETE_FILE');
  }
};

export default {
  getItem,
  getItems,
  createItems,
  deleteItems,
};

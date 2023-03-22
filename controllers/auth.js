import { matchedData } from 'express-validator';
import { models } from '../models/index.js';

// TODO Utilities
import { encryptPassword, comparePassword } from '../utils/handlePassword.js';
import { tokenSign } from '../utils/handleJwt.js';
import { handleHttpError } from '../utils/handleError.js';

/**
 * * Register user auth
 * @param {*} req
 * @param {*} res
 */
const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const passwordHash = await encryptPassword(req.password);
    const body = { ...req, password: passwordHash };
    const userData = await models.usersModel.create(body);
    userData.set('password', undefined, { strict: false });

    const data = {
      token: tokenSign(userData),
      user: userData,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER_USER');
  }
};

/**
 * * Login user auth
 * @param {*} req
 * @param {*} res
 */
const loginController = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await models.usersModel.findOne({ email: req.email });
    if (!user) return handleHttpError(res, 'ERROR_USER_NOT_EXISTS', 404);

    const hashPassword = user.get('password');
    const check = await comparePassword(req.password, hashPassword);
    if (!check) return handleHttpError(res, 'ERROR_PASSWORD_INVALID', 401);

    user.set('password', undefined, { strict: false });

    const data = {
      token: tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_LOGIN_USER');
  }
};

export default {
  registerController,
  loginController,
};

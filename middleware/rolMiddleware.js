import { handleHttpError } from '../utils/handleError.js';

/**
 * * Authorized Roles Array
 * @param {*} rol
 * @returns
 */
export const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const userRole = user.role; // TODO default = ["User"]

    const checkRolValue = roles.some((rolSingle) =>
      userRole.includes(rolSingle)
    );
    if (!checkRolValue) {
      return handleHttpError(res, 'ERROR_UNAUTHORIZED_USER', 403);
    }

    next();
  } catch (error) {
    handleHttpError(res, 'ERROR_PERMISSIONS', 403);
  }
};

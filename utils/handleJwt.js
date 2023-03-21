import jwt from 'jsonwebtoken';
import { getPropertiesDatabase } from '../utils/handlePropertiesEngine.js';
const propertiesKey = getPropertiesDatabase();

const JWT_SECRET = process.env.JWT_SECRET;

/**
 *  *user = The user object
 * @param {*} user
 */
export const tokenSign = (user) => {
  try {
    const sign = jwt.sign(
      { [propertiesKey.id]: user[propertiesKey.id], role: user.role },
      JWT_SECRET,
      {
        expiresIn: '2h',
      }
    );
    return sign;
  } catch (error) {
    return null;
  }
};

/**
 *  * tokenJwt = Session Token = JsonWebToken
 * @param {*} tokenJwt
 * @returns
 */
export const verifyToken = (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

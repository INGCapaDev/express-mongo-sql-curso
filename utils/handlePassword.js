import bcryptjs from 'bcryptjs';

/**
 * * no-encripted Password like: text123
 * @param {*} passwordPlain
 */
export const encryptPassword = async (passwordPlain) =>
  await bcryptjs.hash(passwordPlain, 10);

/**
 * * no-encripted Password like: text123
 * * encripted Password like: w3*f+3@D3
 * @param {*} passwordPlain
 * @param {*} hashPassword
 */
export const comparePassword = async (passwordPlain, hashPassword) =>
  await bcryptjs.compare(passwordPlain, hashPassword);

export const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey == 'ftacapa-01') return next();
    return res.status(403).send({ error: 'API_KEY_INCORRECT' });
  } catch (error) {
    res.status(403);
    res.send({ error: 'CUSTOM_HEADER_ERROR_HAPPENED' });
  }
};

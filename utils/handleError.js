export const handleHttpError = (
  res,
  message = 'ERROR_HAPPENED',
  code = 403
) => {
  res.status(code);
  res.send({ error: message });
};

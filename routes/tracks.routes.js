import express from 'express';
export const tracksRoutes = express.Router();

// TODO https://localhost/tracks GET, POST, DELETE, PUT

tracksRoutes.get('/', (req, res) => {
  const data = ['hola', 'mundo'];

  res.send({ data });
});

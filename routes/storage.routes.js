import express from 'express';
export const storageRoutes = express.Router();
// import storageController from '../controllers/storage.js';

// TODO https://localhost/api/storage GET, POST, DELETE, PUT

storageRoutes.post('/', (req, res) => {
  res.send({ a: 1 });
});

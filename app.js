import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 3000;

app.listen(port);
console.log(`Server listen on port ${port}`);

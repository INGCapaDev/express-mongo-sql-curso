import multer from 'multer';

import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const pathStorage = path.join(__dirname, '../uploads');
    cb(null, pathStorage);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop(); // TODO ["name", "png"]
    const filename = `file-${Date.now()}.${ext}`; // TODO file-xxxxxx.ext
    cb(null, filename);
  },
});

export const uploadMiddleware = multer({ storage });

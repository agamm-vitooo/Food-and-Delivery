import express from 'express';
import multer from 'multer';
import { addFood, listFood, removeFood, updateFood } from '../controllers/authController.js';

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

const foodRouter = express.Router();

// Food routes
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listFood);
foodRouter.post('/remove', removeFood);
foodRouter.post('/update', upload.single('image'), updateFood); // Route for updating food item

export default foodRouter;
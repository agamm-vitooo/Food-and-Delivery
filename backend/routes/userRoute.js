import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser); // Route untuk register
userRouter.post('/login', loginUser); // Route untuk login

export default userRouter;
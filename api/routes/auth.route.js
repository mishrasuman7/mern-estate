import express from 'express';
import jwt from 'jsonwebtoken';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router();
router.post('/signup', signup);

export default router;
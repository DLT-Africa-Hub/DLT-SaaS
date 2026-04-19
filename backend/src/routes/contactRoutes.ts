import express from 'express';
import { submitContact } from '../controllers/messageControllers';

const router = express.Router();

router.post('/', submitContact);

export default router;

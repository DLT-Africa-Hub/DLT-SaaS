import express from 'express';
import {
  submitContact,
  getMessages,
  getMessageById,
  deleteMessage,
  sendWelcomeEmail,
} from '../controllers/messageControllers';

const router = express.Router();

router.post('/', submitContact);
router.get('/', getMessages);
router.get('/:id', getMessageById);
router.delete('/:id', deleteMessage);
router.post('/welcome', sendWelcomeEmail);

export default router;

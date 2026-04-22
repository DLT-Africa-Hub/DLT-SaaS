import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Contact from '../models/messageModel';

// @desc    Submit contact form
export const submitContact = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, company, projectGoal, timeline, budgetBand, message } =
      req.body;

    if (!name || !email) {
      res.status(400);
      throw new Error('Name and email are required');
    }

    const contact = await Contact.create({
      name,
      email,
      company,
      projectGoal,
      timeline,
      budgetBand,
      message,
    });

    res.status(201).json({
      success: true,
      data: contact,
    });
  },
);

// @desc    Get all messages
export const getMessages = asyncHandler(
  async (_req: Request, res: Response) => {
    const messages = await Contact.find();

    res.status(200).json({
      success: true,
      data: messages,
    });
  },
);

// @desc    Get a particular message by ID
export const getMessageById = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const message = await Contact.findById(id);

    if (!message) {
      res.status(404);
      throw new Error('Message not found');
    }

    res.status(200).json({
      success: true,
      data: message,
    });
  },
);

// @desc    Delete a message
export const deleteMessage = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const message = await Contact.findByIdAndDelete(id);

    if (!message) {
      res.status(404);
      throw new Error('Message not found');
    }

    res.status(200).json({
      success: true,
      message: 'Message deleted successfully',
    });
  },
);

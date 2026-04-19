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

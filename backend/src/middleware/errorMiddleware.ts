import { Request, Response } from 'express';

export const notFound = (_req: Request, res: Response) => {
  res.status(404);
  throw new Error('Route not found');
};

export const errorHandler = (err: unknown, _req: Request, res: Response) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = 'Something went wrong';
  let stack: string | null = null;

  if (err instanceof Error) {
    message = err.message;
    stack = err.stack || null;
  }

  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : stack,
  });
};

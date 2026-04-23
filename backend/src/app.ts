import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import contactRoutes from './routes/contactRoutes';

const app = express();

const allowedOrigins = ['http://localhost:5173'];
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', contactRoutes);

app.get('/api/health', async (req, res) => {
  const dbState = mongoose.connection.readyState;
  const isDbConnected = dbState === 1; 

  if (isDbConnected) {
    res.status(200).json({
      status: 'ok',
      uptime: process.uptime(),
      database: 'connected',
    });
  } else {
    res.status(503).json({
      status: 'error',
      uptime: process.uptime(),
      database: 'disconnected',
    });
  }
});

app.get('/', (_req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

export default app;

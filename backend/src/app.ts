import express from 'express';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import contactRoutes from './routes/contactRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(notFound);
app.use(errorHandler);

// Test route
app.use('/api/contact', contactRoutes);
app.get('/', (_req, res) => {
  res.send('API is running...');
});

export default app;

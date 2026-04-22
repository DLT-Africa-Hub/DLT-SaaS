import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  company?: string;
  projectGoal?: string;
  timeline?: string;
  budgetBand?: string;
  message?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const submitMessage = async (data: ContactMessage) => {
  const response = await apiClient.post('/api/contact', data);
  return response.data;
};



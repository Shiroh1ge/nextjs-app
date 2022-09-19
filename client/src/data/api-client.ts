import axios from 'axios';
import { env } from '../env/client.mjs';

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

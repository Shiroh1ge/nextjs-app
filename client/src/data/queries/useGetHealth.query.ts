import { useQuery } from 'react-query';
import { apiClient } from '../api-client';
import { env } from '../../env/client.mjs';

const fetchHealth = async () => await apiClient.get<string>(`${env.NEXT_PUBLIC_API_URL}/health`);

export const useGetHealth = () => {
  return useQuery(['health'], fetchHealth);
};

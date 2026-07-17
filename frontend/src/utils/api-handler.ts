import { apiClient } from "@/lib/axios";

export const checkVoucher = async (data: {
  flightNumber: string;
  date: string;
}) => {
  try {
    const response = await apiClient.post('/api/check', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const generateVoucher = async (data: {
  name: string;
  id: string;
  flightNumber: string;
  date: string;
  aircraft: string;
}) => {
  try {
    const response = await apiClient.post('/api/generate', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

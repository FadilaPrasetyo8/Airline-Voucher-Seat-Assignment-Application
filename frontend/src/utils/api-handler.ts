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

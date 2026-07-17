import axios from "axios";
import { env } from "@/lib/env";

export const apiClient = axios.create({
  baseURL: env.apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

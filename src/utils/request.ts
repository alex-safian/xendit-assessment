import axios, { AxiosInstance } from "axios";
import { API_URL } from "@constants/index";

// Create axios instance
const request: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Request timeout
  headers: { "Content-Type": "application/json" },
});

export default request;

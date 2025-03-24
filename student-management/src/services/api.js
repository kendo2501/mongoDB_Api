import axios from "axios";

const API_BASE_URL = "http://192.168.10.6:2501/api/kendo"; // Thay URL backend nếu cần

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default api;

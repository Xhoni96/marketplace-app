import axios from "axios";
// import { API_BASE_URL } from "./constants/api";

const apiClient = axios.create({ baseURL: "http://localhost:3000/api" });

export default apiClient;

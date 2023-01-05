import axios from "axios";

const BASE_URL = "http://localhost:3000";

const internalAPI = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default internalAPI;

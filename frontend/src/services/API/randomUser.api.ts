import axios from "axios";

const BASE_URL = "https://randomuser.me/api";

const randomUserApi = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default randomUserApi;

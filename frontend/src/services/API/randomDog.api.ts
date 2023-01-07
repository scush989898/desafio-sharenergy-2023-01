
import axios from "axios";

const BASE_URL = "https://random.dog/doggos";

const randomDogApi = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default randomDogApi;

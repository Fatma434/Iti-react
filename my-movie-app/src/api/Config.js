// Config.js
import axios from 'axios';

const apiKey = 'b6ea6cf613e8321c15d57132a048e5b1';  // Add quotation marks around the value
const baseURL = 'https://api.themoviedb.org/3';  // Add quotation marks around the value

console.log('Base URL:', baseURL);

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: apiKey,
  };
  return config;
});

export default axiosInstance;
export { apiKey };

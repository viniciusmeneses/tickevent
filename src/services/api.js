import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const configWithAuth = (token, config = {}) => ({
  ...config,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;

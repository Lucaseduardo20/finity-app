import axios from "axios";

const base_url = 'http://192.168.15.28:8000/api/'

export const api = axios.create({
        baseURL: base_url,
        headers: {
          'Content-Type': 'application/json',
        },
    }
);

export const setAuthToken = (token: string | null) => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  };
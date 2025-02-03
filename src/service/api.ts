import axios, { AxiosResponse } from "axios";

const base_url = 'http://192.168.15.28:8081/'

export const api = axios.create({
        baseURL: base_url,
        headers: {
          'Content-Type': 'application/json'
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
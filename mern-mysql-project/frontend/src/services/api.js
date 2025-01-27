import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = (credentials) =>
  axios.post(`${API_URL}/auth/login`, credentials);

export const registerUser = (data) =>
  axios.post(`${API_URL}/auth/register`, data);

import axios from 'axios';

const api = axios.create({ baseURL: 'https://glcportal.vercel.app/api' });

export const login = (data) => api.post('/login', data).then((res) => res.data);


export const register = (data) => api.post('/register', data).then((res) => res.data);

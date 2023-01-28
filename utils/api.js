import axios from 'axios';


export const acc = (data) =>
  axios.post('https://glcportal.vercel.app/api/acc', data).then((res) => res.data);

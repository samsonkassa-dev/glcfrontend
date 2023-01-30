import axios from 'axios';


export const acc = (data) =>
  axios.post('http://localhost:3000/api/acc', data).then((res) => res.data);

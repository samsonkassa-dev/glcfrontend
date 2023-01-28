import axios from 'axios';

export default async function login (req, res)  {
  const { headers, body } = req;
  try {
    const { data, headers: returnedHeaders } = await axios.post(
      ' https://glc-server-production.up.railway.app/auth/login',
      body,
      { headers }
    );

    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1].toString())
    );
    res.send(data);
  } catch ({ response }) {
    console.log(response)
    res.status(response.status).json(response.data);
  }
};

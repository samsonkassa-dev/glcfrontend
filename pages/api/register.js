import axios from 'axios';

export default async function register (req, res) {
  const { headers, body } = req;

  try {
    const { data, headers: returnedHeaders } = await axios.post(
      'https://glc-server-production.up.railway.app/auth/register',
      body,
      {
        headers,
      }
    );
    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1].toString())
    );
    res.send(data);
  } catch ({ response: { status, data } }) {
    res.status(status).json(data);
  }
};

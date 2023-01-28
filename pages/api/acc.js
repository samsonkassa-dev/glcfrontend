import axios from 'axios';

export default async function register (req, res)  {
  const { headers, body } = req;
  try {
    const { data, headers: returnedHeaders } = await axios.post(
      'http://127.0.0.1:5001/acc',
      body,
      { headers }
    );

    Object.entries(returnedHeaders).forEach((keyArr) =>
      res.setHeader(keyArr[0], keyArr[1].toString())
    );
    res.send(data);
  } catch ({ response }) {
    res.status(response.status).json(response.data);
  }
};

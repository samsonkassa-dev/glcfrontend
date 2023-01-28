import { verify } from 'jsonwebtoken';

export const verifyJwt = (jwt, secret) => {
  const val = verify(jwt, secret);
  console.log(val);
  return val;
};

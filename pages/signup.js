import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import * as api from '../utils/sendAuthRequest';
function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { isLoading, data, error, mutate } = useMutation(api.register);
  const handleSignup = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (data) {
      window.alert('You have successfully registered!');
      router.push('/login');
    }
  }, [data]);

  return (
    <div className="">
      <Nav />
      <div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form action="" className="mb-0 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={handleSetEmail}
                    className="w-full border-gray-300  rounded border
                 p-2 outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    required
                    value={password}
                    onChange={handleSetPassword}
                    className="w-full border-gray-300  rounded border
                p-2 outline-none"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 
              border border-transparent rounded-md shadow-sm text-sm 
              font-medium text-white bg-[#1593a7] hover:bg-[#159eae]"
                  onClick={handleSignup}
                >
                  {isLoading ? 'Loading...' : 'Sign Up'}
                </button>
              </div>
              <p>
                {`Already have an account?`}
                <button
                  className="text-blue-500 pl-2"
                  onClick={(e) => router.push('/login')}
                >
                  Log In
                </button>
              </p>

              {error && (
                <p className="text-red-400">{error.response?.data?.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

export function getServerSideProps({ req, res }) {
  const { cookies } = req;
  const jwt = cookies.jwt;
  if (jwt) {
    try {
      verifyJwt(jwt, process.env.SECRET_KEY);
      return {
        props: {},
        redirect: {
          destination: '/',
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {},
      };
    }
  } else {
    return {
      props: {},
    };
  }
}

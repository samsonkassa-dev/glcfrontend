import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

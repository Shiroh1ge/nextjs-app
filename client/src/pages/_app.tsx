import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { queryClient } from '../data/query-client';
import { QueryClientProvider } from 'react-query';
import { AnswersProvider } from '../context/context/answers.context';

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* TODO research to see if it's possible to pass context providers only to specific set of components*/}
      <AnswersProvider>
        <Component {...pageProps} />
      </AnswersProvider>
    </QueryClientProvider>
  );
};

export default MyApp;

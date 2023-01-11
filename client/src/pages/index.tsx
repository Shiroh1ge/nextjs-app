import type { NextPage } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import Header from '../components/Header/Header';
import React from 'react';
import { useNostrEvents } from 'nostr-react';
import Event from '../components/Event/Event';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home: NextPage = () => {
  // TODO we can improve the UX here by adding a load state and and error state

  const { events } = useNostrEvents({
    filter: {
      since: 0,
      kinds: [1],
      limit: 10,
    },
  });

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Create T3 App </title>
        </Head>
        <div className=" w-screen max-w-[100vw] max-w-full box-border ">
          <Header title={'Hello World'}></Header>
          <main className="bg-slate-900 min-h-screendark prose">
            <div className="w-full h-full flex">
              <div className="w-96"></div>

              <div className="flex-1 my-6">
                <div className="flex flex-col mb-6 items-center">
                  {events.map((event) => (
                    <div className="mb-8 w-full flex flex-col " key={event.id}>
                      <Event pubkey={event.pubkey} event={event} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-96"></div>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Home;

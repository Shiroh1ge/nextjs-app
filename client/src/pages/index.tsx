import type { NextPage } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import Header from '../components/Header/Header';
import React from 'react';
import { useNostrEvents } from 'nostr-react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home: NextPage = () => {
  // TODO we can improve the UX here by adding a load state and and error state

  const { events } = useNostrEvents({
    filter: {
      authors: ['9c2a6495b4e3de93f3e1cc254abe4078e17c64e5771abc676a5e205b62b1286c'],
      since: 0,
      kinds: [1],
    },
  });

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Create T3 App </title>
        </Head>

        <main className="bg-slate-800 w-screen h-screen dark prose">
          <Header title={'Hello World'}></Header>
          <div className="flex flex-col px-44 mb-6 items-center">
            <>
              {events.map((event) => (
                <p key={event.id}>
                  {event.pubkey} posted: {event.content}
                </p>
              ))}
            </>
          </div>
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Home;

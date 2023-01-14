import type { NextPage } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '@mui/styles';
import { createTheme, Button } from '@mui/material';
import Header from '../components/Header/Header';
import React from 'react';
import Event from '../components/Event/Event';
import Sidebar from '../components/Sidebar/Sidebar';
import { useGetEvents } from '../data/queries/useGetEvents.query';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home: NextPage = () => {
  const { eventsToDisplay, cachedEvents, displayCached } = useGetEvents();

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Create T3 App </title>
        </Head>
        {cachedEvents.current.length > 1 && (
          <Button
            variant="contained"
            className="z-[1] fixed flex top-[75px] left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center bg-cyan-300 h-[50px] w-[250px]"
            onClick={() => {
              displayCached();
            }}
          >
            load {cachedEvents.current.length} new posts
          </Button>
        )}
        <div className=" w-screen max-w-[100vw] max-w-full box-border ">
          <Header title={'Hello World'}></Header>

          <main className="bg-slate-900 min-h-screen dark prose">
            <div className="w-full h-full flex py-6">
              <div className="flex-1">
                <Sidebar></Sidebar>
              </div>

              <div className="w-[750px]">
                <div className="flex flex-col mb-6 items-center">
                  {eventsToDisplay.map((event) => (
                    <div className="mb-8 w-full flex flex-col " key={event.id}>
                      <Event pubkey={event.pubkey} event={event} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Home;

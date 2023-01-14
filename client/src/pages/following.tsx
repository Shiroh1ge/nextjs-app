import type { NextPage } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '@mui/styles';
import { createTheme, Button } from '@mui/material';
import Header from '../components/Header/Header';
import React, { useState, useRef } from 'react';
import Event from '../components/Event/Event';
import Sidebar from '../components/Sidebar/Sidebar';
import { useGetEvents } from '../data/queries/useGetEvents.query';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Following: NextPage = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const cachedEvents = useRef([]);

  const { eventsToDisplay } = useGetEvents();

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Create T3 App </title>
        </Head>
        <div className=" w-screen max-w-[100vw] max-w-full box-border ">
          <Header title={'Hello World'}></Header>
          <div className="fixed top-[50px] left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24 border border-solid border-gray-1">
            <Button variant="contained" className="bg-cyan-300" onClick={() => {}}>
              load {cachedEvents.current.length} more
            </Button>
          </div>
          <main className="bg-slate-900 min-h-screen dark prose">
            <div className="w-full h-full flex py-6">
              <div className="flex-1">
                <Sidebar></Sidebar>
              </div>

              <div className="w-[750px]">
                <div className="flex flex-col mb-6 items-center">
                  {events.map((event) => (
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

export default Following;

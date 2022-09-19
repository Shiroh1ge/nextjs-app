import type { NextPage } from 'next';
import Head from 'next/head';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '@mui/styles';
import { createTheme, Button } from '@mui/material';
import Header from '../components/Header/Header';
import Link from 'next/link';
import React from 'react';
import { useGetTriviaQuestions } from '../data/queries/useGetTriviaQuestions.query';
import { useGetHealth } from '../data/queries/useGetHealth.query';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home: NextPage = () => {
  const { data } = useGetTriviaQuestions();
  const { data: healthResponse, isLoading, error } = useGetHealth();
  const questions = data?.data;
  const healthResponseText =
    !isLoading && !error ? `API Health response: ${healthResponse?.data}` : 'API is unavailable';

  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Create T3 App </title>
        </Head>

        <main className="bg-slate-800 w-screen h-screen dark prose">
          <Header title={healthResponseText}></Header>
          <div className="flex flex-col px-44 mb-6 items-center">
            <h1 className="mt-6">You will be presented with {questions?.length} True or False questions.</h1>
            <h2 className="my-6">Can you score 100%?</h2>

            <Link href="/trivia-question/0" className="self-center mx-auto">
              <Button variant="contained" className="bg-cyan-300 w-64">
                Start
              </Button>
            </Link>
          </div>
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Home;

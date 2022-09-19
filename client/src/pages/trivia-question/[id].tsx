import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useGetTriviaQuestions } from '../../data/queries/useGetTriviaQuestions.query';
import { AnswersContext } from '../../context/context/answers.context';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const TriviaQuestion = () => {
  const { data } = useGetTriviaQuestions();
  const { query, push } = useRouter();
  const id: string = query.id as string;
  const { setAnswer, answersMap } = useContext(AnswersContext);
  const questions = data?.data || [];
  const currentQuestionId = parseInt(id!, 10);
  const triviaQuestion = questions[Number(id)];

  useEffect(() => {
    // navigate to home if questions aren't loaded
    if (!questions.length) {
      push('/');
    }
    
    if (Object.keys(answersMap).length === questions.length) {
      // navigate to the result page if it's the last question
      push(`/trivia-question/result`);
    }
  }, [push, id, answersMap, questions.length]);

  const handleAnswer = (answer: boolean) => {
    setAnswer(id, answer);

    push(`/trivia-question/${currentQuestionId + 1}`);
  };

  return (
    <div className="bg-slate-800 w-screen h-screen">
      <Header title={triviaQuestion?.category || ''} />
      <div className="flex flex-1 flex-col items-center justify-center px-44">
        <div className="flex items-center mt-32 px-6 border-2 border-solid border-cyan-400 w-96 h-96">
          <p className="text-center">{triviaQuestion?.text || ''}</p>
        </div>
        <div className="flex justify-around w-96 m-12">
          <Button variant="contained" className="bg-cyan-300" onClick={() => handleAnswer(false)}>
            FALSE
          </Button>
          <Button variant="contained" className="bg-cyan-300" onClick={() => handleAnswer(true)}>
            TRUE
          </Button>
        </div>
        <div>
          <span>
            {currentQuestionId + 1} of {questions?.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TriviaQuestion;

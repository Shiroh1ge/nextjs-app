import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useGetTriviaQuestions } from '../../data/queries/useGetTriviaQuestions.query';
import { AnswersContext } from '../../context/context/answers.context';
import { useRouter } from 'next/router';

const TriviaResult = () => {
  const { data } = useGetTriviaQuestions();
  const { push } = useRouter();
  const { answersMap, resetMap } = useContext(AnswersContext);
  const questions = data?.data || [];
  const correctAnswersCount = questions.filter((question, i) => answersMap[i] === question.correct_answer).length;
  const isAnswerCorrect = (questionId: string | number, correctAnswer: boolean) =>
    answersMap[questionId] === correctAnswer;

  useEffect(() => {
    if (Object.keys(answersMap).length !== questions.length) {
      // navigate to home page if some questions are not answered
      push('/');
    }
  }, [questions.length, answersMap, push]);

  return (
    <div className="bg-slate-800 w-screen h-screen" data-testid="trivia-result">
      <Header title={'You scored'} subtitle={`${correctAnswersCount} / ${questions.length}`} />
      <div className="px-44">
        {questions.map((question, i) => (
          <div key={i} className="flex align-center mb-6">
            <span className="mr-3">{isAnswerCorrect(i, question.correct_answer) ? '+' : '-'}</span>
            <p>{question.text}</p>
          </div>
        ))}
      </div>
      <Footer buttonText={'Play Again?'} navigateTo={'/'} onClickCallback={() => resetMap()}></Footer>
    </div>
  );
};

export default TriviaResult;

import React, { createContext, useState } from 'react';

/**
 * A map containing the users answers, the key is the question id and the value is the answer
 */
type AnswersMap = Record<string, boolean>;

export const AnswersContext = createContext<{
  answersMap: AnswersMap;
  setAnswer?: (questionId: string, answer: boolean) => void;
  resetMap?: () => void;
}>({ answersMap: {} });

export const AnswersProvider = ({ children }: { children: React.ReactNode }) => {
  const [answersMap, setAnswersMap] = useState<AnswersMap>({});

  const setAnswer = (questionId: string, answer: boolean) => {
    setAnswersMap((answers) => ({ ...answers, [questionId]: answer }));
  };

  const resetMap = () => {
    setAnswersMap({});
  };

  return <AnswersContext.Provider value={{ answersMap, setAnswer, resetMap }}>{children}</AnswersContext.Provider>;
};

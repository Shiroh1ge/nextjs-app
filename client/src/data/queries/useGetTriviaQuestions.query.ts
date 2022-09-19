import { useQuery } from 'react-query';
import { ListResponse } from '../../interfaces/list-response.interface';
import { TriviaQuestion } from '../../interfaces/trivia-question.interface';

// TODO we can add MirageJS to mock the API, here we just hardcode the result
const mockTriviaQuestionsData: ListResponse<TriviaQuestion> = {
  count: 10,
  total: 100,

  data: [
    {
      category: 'History',
      type: 'boolean',
      difficulty: 'hard',
      text: 'Japan was part of the Allied Powers during World War I.',
      correct_answer: true,
    },
    {
      category: 'History',
      type: 'boolean',
      difficulty: 'hard',
      text: 'Joseph Stalin&#039;s real name was Ioseb Bessarionis dze Dzugashvili.',
      correct_answer: true,
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'hard',
      text: 'TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy',
      correct_answer: false,
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'boolean',
      difficulty: 'hard',
      text: 'Throughout the entirety of &quot;Dragon Ball Z&quot;, Goku only kills two characters: a miniboss named Yakon and Kid Buu.',
      correct_answer: true,
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'hard',
      text: 'The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.',
      correct_answer: false,
    },
    {
      category: 'Celebrities',
      type: 'boolean',
      difficulty: 'hard',
      text: 'Lady Gaga&#039;s real name is Stefani Joanne Angelina Germanotta.',
      correct_answer: true,
    },
    {
      category: 'Science: Mathematics',
      type: 'boolean',
      difficulty: 'hard',
      text: 'In Topology, the complement of an open set is a closed set.',
      correct_answer: true,
    },
    {
      category: 'Geography',
      type: 'boolean',
      difficulty: 'hard',
      text: 'The two largest ethnic groups of Belgium are Flemish and Walloon. ',
      correct_answer: true,
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'boolean',
      difficulty: 'hard',
      text: 'The character Plum from &quot;No Game No Life&quot; is a girl.',
      correct_answer: false,
    },
    {
      category: 'Art',
      type: 'boolean',
      difficulty: 'hard',
      text: 'The Statue of Liberty&#039;s official name is &ldquo;Liberty Enlightening the World&rdquo;.',
      correct_answer: true,
    },
  ],
};

// we hardcode the result as the API is not ready
const fetchTriviaQuestions = async (questionsLimit = 10) => Promise.resolve(mockTriviaQuestionsData);
// (await apiClient.get<ListResponse<TriviaQuestion>>(`${env.NEXT_PUBLIC_API_URL}?trivia-questions${questionsLimit}`))
//   .data;

export const useGetTriviaQuestions = (limit?: number) => {
  return useQuery(['trivia-questions'], () => fetchTriviaQuestions(limit));
};

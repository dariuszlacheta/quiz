import { calculateResult } from './calculateResult';

import { Difficult } from '../types';

test('should return result 2', () => {
  const questions = [
    {
      category: 'Category 1',
      correct_answer: 'True',
      difficulty: Difficult.easy,
      incorrect_answers: ['False'],
      question: 'Question 1',
      type: true,
    },
    {
      category: 'Category 2',
      correct_answer: 'True',
      difficulty: Difficult.easy,
      incorrect_answers: ['False'],
      question: 'Question 2',
      type: true,
    },
  ];

  const answers = {
    0: 'True',
    1: 'True',
  };

  const result = calculateResult(questions, answers);
  expect(result).toEqual(2);
});

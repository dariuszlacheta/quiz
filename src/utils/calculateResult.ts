import { Question, Answer } from '../types';

export const calculateResult = (questions: Question[], answers: Answer) => {
  let result = 0;
  questions.forEach((question: Question, idx: number) => {
    if (question.correct_answer === answers[idx]) result++;
  });

  return result;
};

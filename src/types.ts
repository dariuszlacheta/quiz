export enum Difficult {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

export type Category = {
  id: number;
  name: string;
};

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: Difficult;
  incorrect_answers: string[];
  question: string;
  type: boolean;
};

export type Answer = { [index: number]: string };

export type RootState = {
  questionsAmount: number;
  categoryId: number | null;
  difficulty: Difficult;
  categories: Category[];
  questions: Question[];
  error: string;
  answers: Answer | {};
};

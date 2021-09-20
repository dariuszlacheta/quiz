import { rootReducer, initialState } from './rootReducer';

import {
  setCategory,
  clearQuestions,
  setDifficult,
  changeResult,
} from './actions';

import { Difficult } from '../../types';

test('should set category', () => {
  const action = setCategory(12);
  const { categoryId } = rootReducer(initialState, action);
  expect(categoryId).toEqual(12);
});

test('should clear questions', () => {
  const action = clearQuestions();
  const { questions } = rootReducer(initialState, action);
  expect(questions).toEqual([]);
});

test('should set difficulty', () => {
  const action = setDifficult(Difficult.medium);
  const { difficulty } = rootReducer(initialState, action);
  expect(difficulty).toEqual(Difficult.medium);
});

test('should change result', () => {
  const action = changeResult({ 0: 'True' });
  const { answers } = rootReducer(initialState, action);
  expect(answers).toMatchInlineSnapshot(`
    Object {
      "0": "True",
    }
  `);
});

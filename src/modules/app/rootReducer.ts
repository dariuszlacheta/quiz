import { AnyAction } from 'redux';
import {
  GET_CATEGORIES,
  SET_CATEGORY,
  GET_QUESTIONS,
  CLEAR_QUESTIONS,
  SET_DIFFICULT,
  SET_ERROR,
  CHANGE_RESULT,
} from './contants';

import { RootState, Difficult } from '../../types';

export const initialState: RootState = {
  questionsAmount: 10,
  categoryId: null,
  difficulty: Difficult.easy,
  categories: [],
  questions: [],
  error: '',
  answers: {},
};

export const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        error: '',
        answers: {},
        categories: action.categories,
      };

    case SET_CATEGORY:
      return {
        ...state,
        answers: {},
        categoryId: action.categoryId,
      };

    case GET_QUESTIONS:
      return {
        ...state,
        error: '',
        answers: {},
        questions: action.questions,
      };

    case CLEAR_QUESTIONS:
      return {
        ...state,
        answers: {},
        questions: [],
      };

    case SET_DIFFICULT:
      return {
        ...state,
        answers: {},
        difficulty: action.difficulty,
      };

    case SET_ERROR:
      return {
        ...state,
        answers: {},
        error: action.error,
      };

    case CHANGE_RESULT:
      return {
        ...state,
        answers: {
          ...state.answers,
          ...action.value,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;

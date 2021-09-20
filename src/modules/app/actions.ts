import axios from 'axios';
import { Dispatch } from 'redux';

import {
  GET_CATEGORIES,
  SET_CATEGORY,
  GET_QUESTIONS,
  CLEAR_QUESTIONS,
  SET_DIFFICULT,
  SET_ERROR,
  CHANGE_RESULT,
} from './contants';

import { Difficult, Answer } from '../../types';

export const getCategories = () => (dispatch: Dispatch) => {
  axios
    .get(`https://opentdb.com/api_category.php`)
    .then((response) =>
      dispatch({
        type: GET_CATEGORIES,
        categories: response.data.trivia_categories.splice(0, 10),
      })
    )
    .catch((err) =>
      dispatch({
        type: SET_ERROR,
        error: 'Something went wrong, please try again later!',
      })
    );
};

export const setCategory = (categoryId: number) => ({
  type: SET_CATEGORY,
  categoryId,
});

export const getQuestions =
  (questionsAmount: number, categoryId: number | null, difficulty: Difficult) =>
  (dispatch: Dispatch) => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${questionsAmount}&category=${categoryId}&difficulty=${difficulty}&type=boolean`
      )
      .then((response) =>
        dispatch({
          type: GET_QUESTIONS,
          questions: response.data.results,
        })
      )
      .catch((err) =>
        dispatch({
          type: SET_ERROR,
          error: 'Something went wrong, please try again later!',
        })
      );
  };

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS,
});

export const setDifficult = (difficulty: Difficult) => ({
  type: SET_DIFFICULT,
  difficulty,
});

export const changeResult = (value: Answer) => ({
  type: CHANGE_RESULT,
  value,
});

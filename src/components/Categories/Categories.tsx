import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCategories, setCategory, setDifficult } from '../../modules/app';

import {
  Container,
  CategoriesContainer,
  CategoryContainer,
  DifficultContainer,
  StartQuizContainer,
} from './Categories.styles';
import Button from '../Button';
import Error from '../Error';

import { Category, RootState, Difficult } from '../../types';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { categories, difficulty, categoryId, error } = useSelector(
    (state: RootState) => state
  );

  return (
    <Container>
      {error ? (
        <Error>{error}</Error>
      ) : (
        <>
          <h3>Quiz categories:</h3>
          <CategoriesContainer>
            {categories.map((category: Category, idx: number) => (
              <CategoryContainer
                key={category.id}
                onClick={() => dispatch(setCategory(category.id))}
                isActive={categoryId === category.id}
              >
                {`${idx + 1}. ${category.name}`}
              </CategoryContainer>
            ))}
          </CategoriesContainer>
          <DifficultContainer>
            Select difficulty level:
            <select
              defaultValue={difficulty}
              onChange={(e) =>
                dispatch(setDifficult(e.target.value as Difficult))
              }
            >
              {Object.values(Difficult).map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </DifficultContainer>
          <StartQuizContainer>
            <Link to={categoryId !== null ? '/quiz' : '#'}>
              <Button>Start Quiz</Button>
            </Link>
          </StartQuizContainer>
        </>
      )}
    </Container>
  );
};

export default Categories;

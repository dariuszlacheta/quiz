import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getQuestions, clearQuestions, changeResult } from '../../modules/app';

import { calculateResult } from '../../utils';

import {
  Container,
  QuestionWrapper,
  QuestionContainer,
  AnswerContainer,
} from './Quiz.styles';
import Button from '../Button';
import Error from '../Error';
import Modal from '../Modal';

import { RootState, Question } from '../../types';

const Quiz = () => {
  const dispatch = useDispatch();
  const { questionsAmount, categoryId, difficulty, questions, error, answers } =
    useSelector((state: RootState) => state);

  const [result, setResult] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    dispatch(getQuestions(questionsAmount, categoryId, difficulty));
    return () => {
      dispatch(clearQuestions());
    };
  }, []);

  return (
    <Container>
      {quizDone && (
        <Modal>
          <p>Your score is {result}/10</p>
          <Link to="/">
            <Button>Start Over</Button>
          </Link>
        </Modal>
      )}
      {error ? (
        <Error>{error}</Error>
      ) : questions.length > 0 ? (
        <>
          {questions.length > 0 && <h3>{questions[0].category}</h3>}
          {questions.map((question: Question, idx: number) => (
            <QuestionWrapper key={question.question}>
              <h5>Question {idx + 1}</h5>
              <QuestionContainer key={question.question}>
                {question.question.replace(/&quot;/g, '"')}
              </QuestionContainer>
              <AnswerContainer>
                <input
                  onClick={() => {
                    dispatch(changeResult({ [idx]: 'True' }));
                  }}
                  id={`${idx}-True`}
                  type="radio"
                  name={`${idx}`}
                  value="True"
                />
                <label htmlFor={`${idx}-True`}>True</label>
                <input
                  onClick={() => {
                    dispatch(changeResult({ [idx]: 'False' }));
                  }}
                  id={`${idx}-False`}
                  type="radio"
                  name={`${idx}`}
                  value="False"
                />
                <label htmlFor={`${idx}-False`}>False</label>
              </AnswerContainer>
            </QuestionWrapper>
          ))}
          <Button
            onClick={() => {
              setResult(calculateResult(questions, answers));
              setQuizDone(true);
            }}
          >
            Submit answers
          </Button>
        </>
      ) : (
        <Error>Quiz not available for this category</Error>
      )}
    </Container>
  );
};

export default Quiz;

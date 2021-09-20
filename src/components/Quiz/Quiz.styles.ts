import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & h5 {
    display: flex;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    display: flex;
    justify-content: center;
  }

  ${QuestionWrapper} {
    border-top: 1px dashed #2b061e;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    display: flex;
    justify-content: center;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const CategoryContainer = styled.div<{
  isActive: boolean;
}>`
  padding 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;

  ${(props) =>
    props.isActive &&
    css`
      color: #5a710a;
      border: 1px solid #5a710a;
    `}
`;

export const DifficultContainer = styled.div`
  padding: 40px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  & select {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const StartQuizContainer = styled.div`
  display: flex;
  justify-content: center;
`;

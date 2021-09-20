import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const StyledButton = styled.div`
  height: 25px;
  width: 200px;
  padding 20px;
  background: #72A98F;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #4E7E68;
  }
`;

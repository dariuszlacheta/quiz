import styled from 'styled-components';

export const ModalBackground = styled.div`
  background: #000;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
`;

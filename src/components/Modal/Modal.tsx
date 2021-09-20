import React, { FC } from 'react';

import { ModalBackground, ModalContainer } from './Modal.styles';

type Props = {
  children: React.ReactNode;
};

const Modal: FC<Props> = ({ children }) => {
  return (
    <>
      <ModalBackground></ModalBackground>
      <ModalContainer>{children}</ModalContainer>
    </>
  );
};

export default Modal;

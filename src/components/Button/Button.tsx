import React, { FC } from 'react';

import { ButtonContainer, StyledButton } from './Button.styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <ButtonContainer onClick={onClick && onClick}>
      <StyledButton>{children}</StyledButton>
    </ButtonContainer>
  );
};

export default Button;

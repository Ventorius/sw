import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../globalStyles/theme';

const StyledButton = styled.button`
  color: #fff;
  background: ${colors.blue};
  text-align: center;
  text-decoration: none;
  outline: 0;
  font-size: 0.9rem;
  padding: 12px 35px;
  display: inline-block;
  transform: skew(-21deg);

  transition: 0.3s;
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, ${colors.luminescentBlue}, #0689c6);
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    box-shadow: 0 0 15px ${colors.luminescentBlue};
  }

  &:hover {
    transform: translateX(10px) skew(-21deg);
    box-shadow: none;
  }

  /* Un-skew the text */
  & > span {
    display: inline-block;
    transform: skew(21deg);
  }
`;

interface Props {
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;

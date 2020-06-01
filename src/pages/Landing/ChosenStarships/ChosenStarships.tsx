import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'globalStyles/theme';

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(90deg, ${colors.black} 80px, transparent 1%) center, linear-gradient(${colors.black} 80px, transparent 1%) center,
    ${colors.primary};
  background-size: 81px 81px;
`;

const ChosenStarships: FC = () => {
  return <Wrapper></Wrapper>;
};

export default ChosenStarships;

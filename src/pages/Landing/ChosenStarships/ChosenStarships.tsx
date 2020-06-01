import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'globalStyles/theme';

import StarshipCard from 'components/StarshipCard';

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(90deg, ${colors.black} 80px, transparent 1%) center, linear-gradient(${colors.black} 80px, transparent 1%) center,
    ${colors.primary};
  background-size: 81px 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const ChosenStarships: FC = () => {
  return (
    <Wrapper>
      <StarshipCard />
      <StarshipCard />
      <StarshipCard />
    </Wrapper>
  );
};

export default ChosenStarships;

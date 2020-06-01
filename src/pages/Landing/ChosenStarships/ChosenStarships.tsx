import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'globalStyles/theme';

import StarshipCard from 'components/StarshipCard';
import Loader from 'components/Loader';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(90deg, ${colors.black} 80px, transparent 1%) center, linear-gradient(${colors.black} 80px, transparent 1%) center,
    ${colors.primary};
  background-size: 81px 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  min-height: 500px;
`;

interface Props {
  starships: Starship[];
  isLoading: boolean;
}

const ChosenStarships: FC<Props> = ({ starships, isLoading }) => {
  console.log(starships);
  return (
    <Wrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        starships.map((starship) => <StarshipCard key={starship.url} starship={starship} />)
      )}
    </Wrapper>
  );
};

export default ChosenStarships;

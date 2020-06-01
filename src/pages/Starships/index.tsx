import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import StarshipCard from 'components/StarshipCard';
import Loader from 'components/Loader';
import { colors } from 'globalStyles/theme';
import { searchForStarship } from 'modules/starshipsSlice';
import NoResults from './NoResults';

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(90deg, ${colors.black} 80px, transparent 1%) center, linear-gradient(${colors.black} 80px, transparent 1%) center,
    ${colors.primary};
  background-size: 81px 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  min-height: 100vh;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Starships: FC = () => {
  const { isLoading, hasError, hasNoResults, starships } = useSelector((state: RootState) => state.starships);
  const dispatch = useDispatch();

  const { search } = useLocation();
  const { query } = qs.parse(search, { ignoreQueryPrefix: true });

  useEffect(() => {
    dispatch(searchForStarship(query as string));
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : hasNoResults ? (
        <NoResults />
      ) : (
        starships.map((starship) => <StarshipCard key={starship.url} starship={starship} />)
      )}
    </Wrapper>
  );
};

export default Starships;

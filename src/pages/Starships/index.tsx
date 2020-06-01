import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import StarshipCard from 'components/StarshipCard';

import { colors } from 'globalStyles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { searchForStarship } from 'modules/starshipsSlice';
import { RootState } from 'store';
import Loader from '../../components/Loader';

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
  const { isLoading, hasError, starships } = useSelector((state: RootState) => state.starships);
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
      ) : (
        starships.map((starship) => <StarshipCard key={starship.url} starship={starship} />)
      )}
    </Wrapper>
  );
};

export default Starships;

import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchArea from './SearchArea';
import ChosenStarships from './ChosenStarships/ChosenStarships';

import { RootState } from 'store';
import { getStarships } from 'modules/starshipsSlice';

const Landing: FC = () => {
  const { isLoading, hasError, starships } = useSelector((state: RootState) => state.starships);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarships());
  }, []);

  return (
    <div>
      <SearchArea />
      <ChosenStarships isLoading={isLoading} starships={starships.slice(0, 4)} />
    </div>
  );
};

export default Landing;

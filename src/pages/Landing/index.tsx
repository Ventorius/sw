import React, { FC, useEffect } from 'react';
import SearchArea from './SearchArea';
import ChosenStarships from './ChosenStarships/ChosenStarships';
import { getAllStarships } from '../../api/starships';

const Landing: FC = () => {
  useEffect(() => {
    getAllStarships();
  }, []);

  return (
    <div>
      <SearchArea />
      <ChosenStarships />
    </div>
  );
};

export default Landing;

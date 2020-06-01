import React, { FC } from 'react';
import SearchArea from './SearchArea';
import ChosenStarships from './ChosenStarships/ChosenStarships';

const Landing: FC = () => {
  return (
    <div>
      <SearchArea />
      <ChosenStarships />
    </div>
  );
};

export default Landing;

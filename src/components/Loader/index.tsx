import React, { FC } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const Loader: FC = () => {
  return (
    <div data-testid="loader">
      <MoonLoader color="silver" />
    </div>
  );
};

export default Loader;

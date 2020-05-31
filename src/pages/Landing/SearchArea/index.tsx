import React, { FC } from 'react';
import styled from 'styled-components';
import Background from 'assets/dreadnought.webp';
import SearchInput from './SearchInput';

const Wrapper = styled.div`
  height: 800px;
  width: 100vw;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;

const SearchArea: FC = () => {
  return (
    <Wrapper>
      <SearchInput />
    </Wrapper>
  );
};

export default SearchArea;

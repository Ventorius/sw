import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'globalStyles/theme';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

//region styled

const Form = styled.form`
  border-radius: 4px;
  background-color: ${colors.white};
  height: 54px;
  display: flex;
  position: relative;
  transition: all 0.1s ease-in-out;
  width: 100%;
  max-width: 1200px;
  color: ${colors.black};
`;

const Button = styled.button`
  background-color: ${colors.white};
  display: flex;
  box-shadow: none;
  border: none;
  padding: 0;
  outline: none;
  border-radius: 4px;

  svg {
    fill: ${colors.gray};
    height: 30px;
    width: 30px;
    padding-left: 10px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Search = styled.input`
  display: flex;
  flex-grow: 1;
  width: 100%;
  border: none;
  background: none;
  padding-left: 14px;
  word-spacing: normal;
  font-size: 0.9rem;
  font-family: 'Electrolize', sans-serif;

  :focus {
    outline: none;
  }
`;

//endregion

const SearchInput: FC = () => {
  return (
    <Form>
      <Button>
        <SearchIcon />
      </Button>
      <Box>
        <Search placeholder="Search for Star Wars starships" />
      </Box>
    </Form>
  );
};

export default SearchInput;

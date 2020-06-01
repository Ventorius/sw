import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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
  const [query, setQuery] = useState('');
  const history = useHistory();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`/`);
    console.log(query);
  };

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <Button>
        <SearchIcon />
      </Button>
      <Box>
        <Search
          placeholder="Search for Star Wars starships"
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setQuery(e.currentTarget.value)}
        />
      </Box>
    </Form>
  );
};

export default SearchInput;

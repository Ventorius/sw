import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from 'globalStyles/theme';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  color: ${colors.luminescentBlue};
`;

const NoResults: FC = () => {
  const history = useHistory();

  const goBack = (): void => {
    history.goBack();
  };
  return (
    <Wrapper>
      <Heading>There were no results for search phrase you provided.</Heading>
      <Button onClick={goBack}>Go back</Button>
    </Wrapper>
  );
};

export default NoResults;

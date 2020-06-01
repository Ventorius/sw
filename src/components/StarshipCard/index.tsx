import React, { FC } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { useHistory } from 'react-router-dom';

import { colors, mq } from 'globalStyles/theme';

import Button from '../Button';
import BottomSection from './BottomSection';

import Hornet from 'assets/hornet.jpg';

//region styled

const Wrapper = styled.div`
  height: 300px;
  width: 100%;
  max-width: 1000px;
  border: 1px solid #1b4268;
  margin-bottom: 180px;
  background-image: url(${Hornet});
  background-size: cover;
  position: relative;

  ${mq.lg} {
    margin-bottom: 80px;
  }
`;

const Ribbon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  position: relative;
  height: 35px;
  top: 150px;
  color: ${colors.luminescentBlue};
  background-color: ${rgba(colors.blue, 0.7)};

  :before {
    display: block;
    content: '';
    position: absolute;
    width: 4px;
    height: calc(100% + 6px);
    top: -3px;
    background: ${colors.luminescentBlue};
    box-shadow: 14px 0px 38px 6px rgba(76, 255, 255, 0.68);
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
  }
`;

const ShipSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
`;

const ShipName = styled.h3`
  margin: 0;
  color: #c1eefe;
`;

const ShipClass = styled.h4`
  margin: 0;
  color: #6fd8ff;
  text-transform: uppercase;
`;

const Separator = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

const ButtonSection = styled.div`
  padding-right: 25px;
`;

//endregion

interface Props {
  starship: Starship;
}

const StarshipCard: FC<Props> = ({ starship: { name, starship_class, cargo_capacity, crew, length, manufacturer, url } }) => {
  const history = useHistory();

  const goToSingleShipView = () => {
    //id is second to last because there is some wonky, not visible element in the url somehow
    const id = url.split('/').slice(-2, -1);
    history.push(`/starships/${id}`);
  };

  return (
    <Wrapper>
      <Ribbon>
        <ShipSection>
          <ShipName>{name}</ShipName> <Separator>-</Separator>
          <ShipClass>{starship_class}</ShipClass>
        </ShipSection>
        <ButtonSection>
          <Button onClick={goToSingleShipView}>View specs</Button>
        </ButtonSection>
      </Ribbon>
      <BottomSection crew={crew} length={length} cargo={cargo_capacity} manufacturer={manufacturer} />
    </Wrapper>
  );
};

export default StarshipCard;

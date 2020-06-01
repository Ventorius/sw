import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import Hornet from 'assets/hornet.jpg';
import { colors, mq } from 'globalStyles/theme';
import { rgba } from 'polished';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getCurrentStarship } from 'modules/starshipsSlice';
import { useParams, useHistory } from 'react-router-dom';
import Loader from '../../components/Loader';
import numeral from 'numeral';

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

const Image = styled.div`
  height: 300px;
  max-width: 1000px;
  width: 100%;
  border: 1px solid #1b4268;
  margin-bottom: 30px;
  background-image: url(${Hornet});
  background-size: cover;
  background-position: center;
`;

const Specs = styled.ul`
  list-style-type: none;
  width: 100%;
  max-width: 1000px;
  padding-inline-start: 0;
  padding-left: 32px;
  ${mq.lg} {
    padding: 0px;
  }
`;

const SpecRow = styled.li`
  font-size: 12px;
  color: ${rgba(colors.luminescentBlue, 0.5)};
  margin-bottom: 8px;
`;

const SpecValue = styled.span`
  padding-left: 10px;
  font-size: 14px;
  color: ${colors.luminescentBlue};
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${colors.luminescentBlue};
  margin: 1em 0;
  padding: 0;
  width: 100%;
  max-width: 300px;
`;

const Starship: FC = () => {
  const { isLoading, hasError, currentStarship } = useSelector((state: RootState) => state.starships);
  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (Number.isInteger(parseInt(id))) {
      dispatch(getCurrentStarship(id));
    } else {
      history.push('/');
    }
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <Image />
          <Specs>
            <SpecRow>
              Name <SpecValue>{currentStarship?.name}</SpecValue>
            </SpecRow>
            <SpecRow>
              Model <SpecValue>{currentStarship?.model}</SpecValue>
            </SpecRow>
            <SpecRow>
              Manufacturer <SpecValue>{currentStarship?.manufacturer}</SpecValue>
            </SpecRow>
            <SpecRow>
              Starship class <SpecValue>{currentStarship?.starship_class}</SpecValue>
            </SpecRow>
            <Divider />

            <SpecRow>
              Length <SpecValue>{numeral(currentStarship?.length).format('0,0')} m</SpecValue>
            </SpecRow>

            <SpecRow>
              Max atmospheric speed <SpecValue>{currentStarship?.max_atmosphering_speed}</SpecValue>
            </SpecRow>

            <SpecRow>
              Crew<SpecValue>{currentStarship?.crew}</SpecValue>
            </SpecRow>

            <SpecRow>
              Passengers<SpecValue>{currentStarship?.passengers}</SpecValue>
            </SpecRow>

            <SpecRow>
              Cargo capacity<SpecValue>{numeral(Number(currentStarship?.cargo_capacity ?? 0) / 1000).format('0,0')} t</SpecValue>
            </SpecRow>

            <SpecRow>
              Consumables<SpecValue>{currentStarship?.consumables}</SpecValue>
            </SpecRow>

            <SpecRow>
              Cost<SpecValue>{numeral(currentStarship?.cost_in_credits).format('0,0')} credits</SpecValue>
            </SpecRow>
          </Specs>
        </>
      )}
    </Wrapper>
  );
};

export default Starship;

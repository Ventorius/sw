import React, { FC } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import numeral from 'numeral';

import { colors, mq } from '../../globalStyles/theme';

//region styled

const Wrapper = styled.div`
  position: absolute;
  color: ${colors.white};
  height: 31px;
  bottom: -31px;
  width: 100%;
`;

const InnerSection = styled.div`
  background-color: ${colors.darkBlue};
  border: 1px solid ${colors.marine};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;

  ${mq.lg} {
    flex-direction: row;
  }
`;

const SpecSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${rgba(colors.luminescentBlue, 0.5)};
`;

const SpecValue = styled.span`
  padding-left: 10px;
  font-size: 14px;
  color: ${colors.luminescentBlue};
`;

//endregion

interface Props {
  crew: string;
  length: string;
  cargo: string;
  manufacturer: string;
}

const BottomSection: FC<Props> = ({ crew, cargo, length, manufacturer }) => {
  return (
    <Wrapper>
      <InnerSection>
        <SpecSection>
          Crew: <SpecValue>{crew}</SpecValue>
        </SpecSection>
        <SpecSection>
          Length: <SpecValue>{numeral(length).format('0,0')} m</SpecValue>
        </SpecSection>
        <SpecSection>
          Cargo: <SpecValue>{numeral(Number(cargo) / 1000).format('0,0')} t</SpecValue>
        </SpecSection>
        <SpecSection>
          Manufacturer: <SpecValue>{manufacturer}</SpecValue>
        </SpecSection>
      </InnerSection>
    </Wrapper>
  );
};

export default BottomSection;

import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../globalStyles/theme';
import { rgba } from 'polished';

//region styled

const Wrapper = styled.div`
  position: absolute;
  color: white;
  height: 31px;
  bottom: -31px;
  width: 100%;
`;

const InnerSection = styled.div`
  background-color: #021320;
  border: 1px solid #225e5f;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;

const SpecSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${rgba(colors.luminescentBlue, 0.5)};
`;

const SpecValue = styled.span`
  padding-left: 10px;
  font-size: 14px;
  color: ${colors.luminescentBlue};
`;

//endregion

const BottomSection: FC = () => {
  return (
    <Wrapper>
      <InnerSection>
        <SpecSection>
          Crew: <SpecValue>10-165</SpecValue>
        </SpecSection>
        <SpecSection>
          Length: <SpecValue>150</SpecValue>
        </SpecSection>
        <SpecSection>
          Cargo: <SpecValue>3000000</SpecValue>
        </SpecSection>
        <SpecSection>
          Manufacturer: <SpecValue>Corellian Engineering Corporation</SpecValue>
        </SpecSection>
      </InnerSection>
    </Wrapper>
  );
};

export default BottomSection;

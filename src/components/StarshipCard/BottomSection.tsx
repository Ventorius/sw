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
          Length: <SpecValue>{length}</SpecValue>
        </SpecSection>
        <SpecSection>
          Cargo: <SpecValue>{cargo}</SpecValue>
        </SpecSection>
        <SpecSection>
          Manufacturer: <SpecValue>{manufacturer}</SpecValue>
        </SpecSection>
      </InnerSection>
    </Wrapper>
  );
};

export default BottomSection;

import React from 'react'
import { StyledFlexComponent, StyledImage, StyledParagraph } from '../../../styles/helpers';
import { RealEstateTitle, StyledRealEstateContainer } from './style';

type Props = {}

const RealEstate = (props: Props) => {
  return (
    <StyledRealEstateContainer>
      <StyledFlexComponent styleProps={{
        width: '100%',
      }} >
        <div>
          <RealEstateTitle>REAL ESTATE</RealEstateTitle>

          <StyledParagraph
            styleProps={{
              fontSize: '64px',
              lineHeight: '74px',
              color: '#1F2744',
              fontWeight: '600',
            }}
          >
            Let's hunt for your dream residence
          </StyledParagraph>

          <StyledParagraph
            styleProps={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              color: '#73788C',
            }}
          >
            Explore our range of beautiful properties with the addition of
            separate accommodation suitable for you.
          </StyledParagraph>
        </div>

        <div>
          <StyledImage src='/images/image1.svg' />
        </div>
      </StyledFlexComponent>
    </StyledRealEstateContainer>
  );
}

export default RealEstate
import React from 'react';
import {
  StyledContainer,
  StyledFlexComponent,
  StyledImage,
  StyledParagraph,
} from '../../../styles/helpers';
import { DiscoverTitle, LearnMoreButton } from './style';
import RecommendationCard from './RecommendationCard';
import { ThemeType } from '../../../interface';

type RecommendationType = {
  name: string;
  location: string;
  price: string;
  image: string;
};

const Recommendations: RecommendationType[] = [
  {
    name: 'Villa in Los Angeles',
    location: 'Los Angeles, California',
    price: '1,200,000',
    image: 'house1',
  },
  {
    name: 'Villa in Los Angeles',
    location: 'Los Angeles, California',
    price: '1,200,000',
    image: 'house2',
  },
  {
    name: 'Villa in Los Angeles',
    location: 'Los Angeles, California',
    price: '1,200,000',
    image: 'house3',
  },
];

type Props = {
  theme: ThemeType;
};

function Discover(props: Props) {
  return (
    <StyledContainer
      styleProps={{
        backgroundColor: '#E5E5E5',
      }}
    >
      <DiscoverTitle>DISCOVER</DiscoverTitle>

      <StyledFlexComponent
        styleProps={{
          alignItems: 'end',
          width: '100%',
        }}
      >
        <div>
          <StyledParagraph
            styleProps={{
              fontSize: '48px',
              lineHeight: '56px',
              color: '#054457',
              fontWeight: '600',
              letterSpacing: '0.5px',
            }}
          >
            Best Recommendation
          </StyledParagraph>

          <StyledParagraph
            styleProps={{
              fontSize: '16px',
              lineHeight: '26px',
              color: '#73788C',
              fontWeight: '400',
              letterSpacing: '0.5px',
            }}
          >
            Discover our exclusive selection of the finest one-of-a-kind luxury
            properties architectural masterpieces.
          </StyledParagraph>
        </div>

        <LearnMoreButton>
          <StyledFlexComponent
            styleProps={{
              alignItems: 'center',
              // flex: '1',
              justifyContent: 'flex-end',
            }}
          >
            <StyledParagraph
              styleProps={{
                fontSize: '18px',
                lineHeight: '26px',
                color: `${props.theme.colors.primaryText}`,
                margin: '0 8px 0 0',
                marginBottom: '0px',
                cursor: 'pointer',
              }}
            >
              Learn More
            </StyledParagraph>
            <StyledImage
              src='/images/learn-more.svg'
              styleProps={{
                width: 'auto',
                height: 'auto',
              }}
            />
          </StyledFlexComponent>
        </LearnMoreButton>
      </StyledFlexComponent>

      <StyledFlexComponent>
        {Recommendations.map((recommendation, index) => (
          <RecommendationCard index={index} {...recommendation} />
        ))}
      </StyledFlexComponent>
    </StyledContainer>
  );
}

export default Discover;

import React from 'react'
import { StyledFlexComponent, StyledImage } from '../../../styles/helpers';
import ButtonComponent from '../../helper/Button';

type Props = {
    index: number;
    name: string;
    location: string;
    price: string;
    image:string;
}

const RecommendationCard = ({name, location,price,index,image}:Props) => {
  return (
    <div key={index}>
      <StyledImage src={`/images/${image}.svg`} />
      <p>{name}</p>
      <p>{location}</p>
      <StyledFlexComponent>
        <p>${price}</p>
        <p>360m2 Living Area</p>
      </StyledFlexComponent>

      <ButtonComponent text='Send Inquiry' styleProps={{}} />
    </div>
  );
}

export default RecommendationCard
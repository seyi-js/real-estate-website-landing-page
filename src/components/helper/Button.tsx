import React from 'react'
import { ButtonStyleProps, StyledButton } from '../../styles/helpers'

export type ButtonComponentProps = ButtonStyleProps &{
    text: string,
    
}

const Button = ({text,styleProps, onHover}:ButtonComponentProps) => {
  return (
    <StyledButton onHover={{ ...onHover }} styleProps={{ ...styleProps }}>
      {text}
    </StyledButton>
  );
}

export default Button
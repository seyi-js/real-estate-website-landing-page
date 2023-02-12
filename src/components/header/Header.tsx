import React from 'react';
import { StyledHeader, StyledNav as Nav, StyledLogo as Logo, StyledNavText } from './styles';
import { StyledFlexComponent } from '../../styles/helpers';
import Button from '../helper/Button';

const Header: React.FC = () => {
  return (
    <StyledHeader styleProps={{ colors: { background: '#F5F5F5' } }}>
      <StyledFlexComponent styleProps={{ justifyContent: 'space-between', }}>
        <div style={{flex:1}}>
          <Logo
            src='/images/logo.svg'
            style={
              {
                // width: '10px',
              }
            }
          />
        </div>
        <Nav>
          {/* <StyledFlexComponent styleProps={{ justifyContent: 'space-evenly' }}> */}
            <StyledNavText>Home</StyledNavText>
            <StyledNavText>Property</StyledNavText>
            <StyledNavText>About</StyledNavText>
            <StyledNavText>Contact</StyledNavText>
          {/* </StyledFlexComponent> */}
        </Nav>

        <StyledFlexComponent styleProps={{ justifyContent: 'right', flex:1 }}>
          <Button
            text='Sign Up'
            styleProps={{
              color: '#69B99D',
              // backgroundColor:'red'
            }}
            onHover={{
              // color: '#ffffff',
              border: '1px solid #69B99D',
            }}
          />
          <Button
            text='Login'
            styleProps={{
              backgroundColor: '#69B99D',
            }}
            onHover={{
              color: '#69B99D',
              backgroundColor: '#F5F5F5',
            }}
          />
        </StyledFlexComponent>
      </StyledFlexComponent>
    </StyledHeader>
  );
};

export default Header;

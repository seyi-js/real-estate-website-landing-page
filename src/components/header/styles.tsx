import styled from 'styled-components';
import { HeaderStyleProps } from '../../interface';

export const StyledHeader = styled.header<{ styleProps?: HeaderStyleProps }>`
  background-color: ${(props) =>
    props?.styleProps?.colors?.background || '#000000'};
  margin: 32px 124px 32px 124px;
  height: 55px;
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;


  & > div {
    flex: 1;
  }

  
`;

export const StyledNavText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  color: #8e8e8e;
  text-align: center;
  
  /* margin-right:48px; */

  &:hover {
    color: #69b99d;
    cursor: pointer;
  }
`;

export const StyledLogo = styled.img``;

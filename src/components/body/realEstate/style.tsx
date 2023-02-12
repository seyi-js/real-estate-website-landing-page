import styled from "styled-components";
import { StyledContainer } from "../../../styles/helpers";

export const StyledRealEstateContainer = StyledContainer

export const RealEstateTitle = styled.h1`
    font-size: 18px;
    font-weight:500;
    line-height: 26px;
    padding:12px 24px;
    color:${(props) => props.theme.colors.primaryText};
    background-color:${(props) => props.theme.colors.secondaryText};
    display:inline-block;
    margin-bottom: 32px;
`


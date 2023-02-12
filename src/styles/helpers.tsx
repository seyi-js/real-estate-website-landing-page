import styled, { CSSProperties } from 'styled-components';

export type FlexComponentProps = Partial<CSSProperties>;

export const StyledFlexComponent = styled.div<{
  styleProps?: FlexComponentProps;
}>`
  display: ${(props) => props?.styleProps?.display || 'flex'};
  align-items: ${(props) => props?.styleProps?.alignItems || 'center'};
  justify-content: ${(props) =>
    props?.styleProps?.justifyContent || 'space-between'};
  flex: ${(props) => props?.styleProps?.flex};


  & > * {
    width: ${(props) => props?.styleProps?.width || 'auto'};
  }
`;

export type ButtonStyleProps = {
  styleProps: Partial<CSSProperties>;
  onHover?: Partial<CSSProperties>;
};

export const StyledButton = styled.button<ButtonStyleProps>`
  background-color: ${(props) =>
    props?.styleProps?.backgroundColor || props.theme.colors.defaultBackground};
  color: ${(props) => props.styleProps.color || '#FFFFFF'};
  font-size: 16px;
  padding: 16px 48px 15px;
  border: ${(props) => props.styleProps.border || 'none'};
  font-weight: 500;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.onHover?.color};
    background-color: ${(props) => props.onHover?.backgroundColor || '#FFFFFF'};
    border: ${(props) => props.onHover?.border || '1px solid #69B99D'};
  }
`;

export type ParagraphStyleProps = {
  styleProps?: Partial<CSSProperties>;
};

export const StyledParagraph = styled.p<ParagraphStyleProps>`
  font-size: ${(props) => props.styleProps?.fontSize || '16px'};
  font-weight: ${(props) => props.styleProps?.fontWeight || '500'};
  line-height: ${(props) => props.styleProps?.lineHeight || '24px'};
  color: ${(props) =>
    props.styleProps?.color || props.theme.colors.primaryText};
  margin-bottom: ${(props) => props.styleProps?.marginBottom || '32px'};
  margin: ${(props) => props.styleProps?.margin};
  letter-spacing: ${(props) => props.styleProps?.letterSpacing || '0.0025em'};
  font-style: ${(props) => props.styleProps?.fontStyle || 'normal'};
  cursor: ${(props) => props.styleProps?.cursor || 'default'};
`;

export type ImageStyleProps = {
  styleProps?: Partial<CSSProperties>;
}

export const StyledImage = styled.img<ImageStyleProps>`
  width: ${(props) => props.styleProps?.width || '100%'};
  height: ${(props) => props.styleProps?.height || '100%'};
`

type ContainerStyleProps = {
  styleProps?: Partial<CSSProperties>;
}

export const StyledContainer = styled.div<ContainerStyleProps>`
  padding: 32px 124px;
  background-color:  ${(props) => props.styleProps?.backgroundColor ||  props.theme.colors.defaultBackground};
`
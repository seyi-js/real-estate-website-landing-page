export type ThemeType = {
  screen: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
   colors:{
    defaultBackground: string;
    primaryText: string;
    secondaryText: string;
   }
};

export type HeaderStyleProps ={
    colors?:{
        background?: string;
    }
}
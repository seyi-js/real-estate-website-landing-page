import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeType } from './interface';
import Global from './styles/global';
import Header from './components/header/Header';
import RealEstate from './components/body/realEstate/RealEstate';
import Discover from './components/body/discover/Discover';

const theme: ThemeType = {
  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  colors: {
    defaultBackground: '#F5F5F5',
    primaryText: '#69B99D',
    secondaryText: '#F8F9FE',
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header/>
      <RealEstate/>
      <Discover theme={theme} />
    </ThemeProvider>
  );
};

export default App;

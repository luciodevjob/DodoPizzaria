import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Home} from './src/screens/Home'

import {
  useFonts, 
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_600SemiBold,
  Mulish_700Bold,
  Mulish_800ExtraBold,

  
} from '@expo-google-fonts/mulish'
import AppLoading from  'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
    Mulish_800ExtraBold,
});

if(!fontsLoaded){
    return <AppLoading/>
}
return (
  <ThemeProvider theme={theme}>
    <Home/>
 </ThemeProvider>
);
}

  
   


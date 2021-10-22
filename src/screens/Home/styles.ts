import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color:  ${({theme}) => theme.colors.background_primary}
  
`;

export const Header = styled.View`

width: 100%;
height: 260px;
background-color:  ${({theme}) => theme.colors.background_Header};

padding: 0 24px ;
padding-top:${getStatusBarHeight() + 15}px; 

`

export const HeaderContent = styled.View`
flex-direction: row;
justify-content: space-between;


`

export const ButtonCarts = styled(RectButton)`

`

export const Localization = styled.View`
width: 100%;
height: 32px;
justify-content: center;
margin-top: 18px;


background-color: ${({theme}) => theme.colors.background_locale};

`
export const LocalizationContent = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 8px 9px;
`

export const TextLocation = styled.Text`
color: ${({theme}) => theme.colors.Carts};
font-size: ${RFValue(14)}px;
margin: 10px;
font-family: ${({theme}) => theme.fonts.primary_700};
`
export const FoofWapper = styled.View`
padding-bottom: 10px;

`

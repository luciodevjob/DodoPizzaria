import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
position: absolute;
width: 100%;
height: 100%;
bottom: 0;

background-color: ${({theme}) => theme.colors.background_primary};    
`
export const Header = styled.View`
padding-top: 30px;

padding-bottom: 20px;
`
export const HeaderLogo = styled.View`
align-items: center;
padding-top: 20px;
`

export const Divider = styled.View`
width: 100%;
border: 1px solid ${({theme,}) => theme.colors.border_Divider};
`

export const YourRequests = styled.View`
padding-left: 24px;
padding-right: 24px;
padding-top: 20px;
padding-bottom: 20px;
flex-direction: row;
justify-content: space-between;


`
export const Title = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({theme}) => theme.fonts.primary_300};
` 
export const Amount = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({theme}) => theme.fonts.primary_300};
`


export const CartPadding = styled.View`
padding-bottom: 25px;
`
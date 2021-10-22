import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
    cheked: boolean;
}

export const Container = styled.View<Props>`
  flex: 1;
  padding:0px 24px;
  padding-top:  ${({cheked}) =>cheked ? 10 : 0}px;
  
`;

export const Content = styled.View`
flex-direction: row;


`
export const PizzaImg = styled.Image` 
width: 114px;
height: 122px;
border-radius: 13px;
`
export const Properties = styled.View`
 margin-top: 15px;
 margin-left: 12px;
 width: 224px;
 height: 90px;
`
export const Name = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_700};
font-size:  ${RFValue(20)}px;;
`
export const Ingredients = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_300};
padding-right: 24px;
font-size: ${RFValue(14)}px;
`
export const Price = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_700};
font-size: ${RFValue(14)}px;`

export const Carts = styled(RectButton)`
position: absolute;
bottom: 0;
right: 0;
`
export const Background = styled.View`

background-color: ${({theme}) => theme.colors.Carts};

width: 78px;
height:34px;

align-items: center;
justify-content: center;

border-top-left-radius: 13px;
border-bottom-right-radius: 13px;


`
export const Add = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_800};
font-size: ${RFValue(13)}px;

color: ${({theme}) => theme.colors.title_white};
`
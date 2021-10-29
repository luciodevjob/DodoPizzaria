import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 15px;
`;

export const Content = styled.View`
flex-direction: row;
border-radius: 13px;



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
position: absolute;
bottom: -5px;
right: 35px;
font-family: ${({theme}) => theme.fonts.primary_700};
font-size: ${RFValue(18)}px;`


export const AddContainer = styled.View`
`
export const ContentCart = styled.View`
width: 100%;
margin-left: 24px;
margin-right: 24px;
`
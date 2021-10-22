
import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


interface buttonProps {
 cheked?: boolean
}


export const Container = styled.View`
  flex: 1;
  padding-right: 10px;

`;



export const MenuCard =  styled(TouchableOpacity)<buttonProps>`
width: 90px;
height: 109px;
border-radius: 12px;
margin-top: 17px;
border: 1px solid;
border-color: ${({theme,cheked}) =>cheked ? theme.colors.Carts : 0};
align-items: center;

`
export const MenuWapper = styled.View`
align-items: center;
width: 90px;
height: 109px;

`
export const ImageFood = styled.Image`
margin-top: 10px;
width: 64px;
height: 64px;
`

export const TextFood = styled.Text`
padding-top: 10px;
font-family: ${({theme}) => theme.fonts.primary_800};
color: ${({theme}) => theme.colors.Title_Black};

`

import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface buttonProps {
    selected?: boolean
    options?: boolean;
    
   }

   interface divider {
    divider?: boolean
   }


export const Container = styled.View`
 
`;
export const ButtonContainer = styled(TouchableOpacity)``

export const SubTitleContent = styled.View`
padding-left: 24px;
padding-right: 24px;

flex-direction: row;
justify-content: space-between;

`
export const RequireBackground = styled.View`
background-color: ${({theme}) => theme.colors.background_require};
border-radius: 20px;
width: 76px;
height:22px;
align-items: center;
justify-content: center;
`

export const RequireText = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_800};
font-size: ${RFValue(10)}px;
color: ${({theme}) => theme.colors.require};
`
export const Choose = styled.View` 
padding-left: 24px;
padding-right: 24px;
padding-bottom: 10px;
margin-top: 10px;
flex-direction: row;
align-items: center;

justify-content: space-between;
`;

export const ChooseProps = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;

`;
export const ChooseOneButtonSelect = styled.View<buttonProps>`
width: 20px;
height: 20px;
align-items: center;
justify-content: center;
border-radius: ${({options}) => options ? 0 : 10}px;
border: 1px solid ${({theme, selected}) => selected ? theme.colors.Carts : theme.colors.select};
`;

export const ChooseOneButton = styled.View<buttonProps>`
width: 10px;
height: 10px;

border-radius: ${({options}) => options ? 0 : 10}px;
background-color: ${({theme}) => theme.colors.Carts};
`;



export const Divider = styled.View<divider>`
position: absolute;
right: 24px;
bottom: 0;
width: 280px;
border: 1px solid ${({theme,}) => theme.colors.border_Divider};
`



export const ChooseText = styled.Text` 
font-family: ${({theme}) => theme.fonts.primary_400};
color: ${({theme}) => theme.colors.Title_Black};
font-size: ${RFValue(14)}px;
padding-left: 10px;
`;

export const ChoosePrice = styled.Text``;

export const Footer = styled.View`
flex-direction: row;
justify-content: space-between;
padding-right: 24px;
`
export const TotalText = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_600};
font-size: ${RFValue(13)}px;
color: ${({theme}) => theme.colors.Title_Black}
`

export const TotalPrice = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_700};
font-size: ${RFValue(20)}px;
color: ${({theme}) => theme.colors.Title_Black}
`

export const FooterPrice = styled.View`
align-items: center;
`

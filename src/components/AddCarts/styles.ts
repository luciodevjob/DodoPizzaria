import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const ViewModal = styled.View`
`
export const Container = styled.View`
position: absolute;
width: 100%;
height: 92%;
bottom: 0;

background-color: ${({theme}) => theme.colors.background_primary};    
`
export const HeaderView = styled.View`

flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 20px;
margin-right: 24px;
margin-left: 24px;
margin-bottom: 14px;
`
export const Title = styled.Text`
font-family: ${({theme}) => theme.fonts.primary_800};
color: ${({theme}) => theme.colors.Title_Black};
font-size: ${RFValue(20)}px;
`

export const Carts = styled(RectButton)`
position: absolute;
bottom: 0;
right: 40px;

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
export const ButtonClose = styled(TouchableOpacity)``

export const SubTitle = styled.Text`
color: ${({theme}) => theme.colors.Title_Black};
font-family: ${({theme}) => theme.fonts.primary_800}
`


/* INICIO CAIXA DE ESCOLHA*/

export const SubTitleContent = styled.View`
padding-left: 24px;
padding-right: 24px;
padding-top: 20px;
flex-direction: row;
justify-content: space-between;

`

interface RequireProps {
    opcional?: boolean;
}
export const RequireBackground = styled.View<RequireProps>`
background-color: ${({theme, opcional}) => opcional ? theme.colors.options : theme.colors.background_require};
border-radius: 20px;
width: 76px;
height:22px;
align-items: center;
justify-content: center;
`


export const RequireText = styled.Text<RequireProps>`
font-family: ${({theme}) => theme.fonts.primary_800};
font-size: ${RFValue(10)}px;
color: ${({theme, opcional}) => opcional ? theme.colors.Title_Black : theme.colors.require};
`
export const Divider = styled.View`
width: 100%;
border: 1px solid ${({theme}) => theme.colors.border_Divider};
margin-top: 30px;
margin-bottom: 10px;
`

export const ButtonConfirm = styled(TouchableOpacity)`
margin-left: 24px;
width: 200px;
border-radius: 8px;
height: 46px;
background-color:  ${({theme}) => theme.colors.Carts};
align-items: center;
justify-content: center;
`

export const AddConfirm = styled.Text`
text-transform: uppercase;
color: ${({theme}) => theme.colors.title_white}
`

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


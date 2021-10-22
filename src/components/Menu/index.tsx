import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import logo from '../../assets/Pizza.png';
import logopizza from '../../assets/Pizza.png'

import { Container, MenuCard, ImageFood, TextFood, MenuWapper } from './styles'

interface MenuCard extends TouchableOpacityProps{
    img: ImageProps,
    title: string,
    cheked: boolean,
    
}


export function Menu( 
    {img, title, cheked = false, ...rest}: MenuCard,
    ){
   
  return (
    <Container>
       
        <MenuCard cheked={cheked} {...rest}>
        <MenuWapper >
            <ImageFood source={img}/>
            <TextFood>{title}</TextFood>
        </MenuWapper>
        </MenuCard>
       
    </Container>
  );
}